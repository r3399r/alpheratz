import { Client, EventMessage } from '@line/bot-sdk';
import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { LogAccess } from 'src/access/LogAccess';
import { UserAccess } from 'src/access/UserAccess';
import { config, Reply, Stage } from 'src/constant/config';
import { LogEntity } from 'src/model/entity/logEntity';
import { User, UserEntity } from 'src/model/entity/userEntity';
import { toLineMessage } from 'src/util/ConfigHelper';

/**
 * Service class for Chat
 */
@injectable()
export class ChatService {
  @inject(DbAccess)
  private readonly dbAccess!: DbAccess;

  @inject(UserAccess)
  private readonly userAccess!: UserAccess;

  @inject(LogAccess)
  private readonly logAccess!: LogAccess;

  @inject(Client)
  private readonly client!: Client;

  private user!: User;
  private message!: string;

  public async cleanup() {
    await this.dbAccess.cleanup();
  }

  public async receiveFollow(userId: string, replyToken: string) {
    try {
      await this.dbAccess.startTransaction();

      const firstStage = config.main.find((v) => v.prevStage === null);
      if (firstStage === undefined) throw new Error('first stage not found');

      const follower = new UserEntity();
      follower.id = userId;
      follower.follow = true;
      follower.mainStage = firstStage.stage;
      await this.userAccess.save(follower);

      const log = new LogEntity();
      log.user = follower;
      log.action = 'follow';
      await this.logAccess.save(log);

      await this.client.replyMessage(
        replyToken,
        toLineMessage(firstStage.message)
      );

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }

  public async receiveUnfollow(userId: string) {
    try {
      await this.dbAccess.startTransaction();

      const user = await this.userAccess.findOneById(userId);
      user.follow = false;
      await this.userAccess.save(user);

      const log = new LogEntity();
      log.user = user;
      log.action = 'unfollow';
      await this.logAccess.save(log);

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }

  private async saveNotPassMessageLog(type: 'hint' | 'fail') {
    const log = new LogEntity();
    log.user = this.user;
    log.action = 'message';
    log.message = this.message;
    log.type = type;
    await this.logAccess.save(log);
  }

  private async handleNotPassMessage(
    reply: Reply | undefined,
    replyToken: string
  ) {
    if (reply?.type === 'pass') return;
    if (reply === undefined) {
      await this.saveNotPassMessageLog('fail');
      await this.client.replyMessage(replyToken, {
        type: 'text',
        text: '不對唷！再想想',
      });
    } else if (reply.type === 'hint') {
      await this.saveNotPassMessageLog('hint');
      await this.client.replyMessage(replyToken, toLineMessage(reply.message));
    } else {
      await this.saveNotPassMessageLog('fail');
      await this.client.replyMessage(replyToken, toLineMessage(reply.message));
    }
  }

  private async handleMainStages(
    currentStage: Stage,
    nextStage: Stage,
    replyToken: string
  ) {
    const reply =
      currentStage.reply?.find((v) => v.keyword === this.message) ??
      currentStage.reply?.find((v) => v.keyword === null);
    if (reply?.type !== 'pass')
      await this.handleNotPassMessage(reply, replyToken);
    else {
      this.user.mainStage = nextStage.stage;
      await this.userAccess.save(this.user);

      const log = new LogEntity();
      log.user = this.user;
      log.action = 'message';
      log.message = this.message;
      log.type = 'pass';
      log.attribute = 'main_stage';
      log.oldValue = currentStage.stage;
      log.newValue = nextStage.stage;
      await this.logAccess.save(log);

      await this.client.replyMessage(
        replyToken,
        toLineMessage(nextStage.message)
      );
    }
  }

  public async receiveMessage(
    eventMessage: EventMessage,
    userId: string,
    replyToken: string
  ) {
    try {
      await this.dbAccess.startTransaction();
      if (eventMessage.type !== 'text') return;
      this.message = eventMessage.text;
      this.user = await this.userAccess.findOneById(userId);

      // check status: before-game or in-game
      const currentMainStage = config.main.find(
        (v) => v.stage === this.user.mainStage
      );
      const nextMainStage = config.main.find(
        (v) => v.prevStage === this.user.mainStage
      );
      if (currentMainStage === undefined || nextMainStage === undefined)
        throw new Error('unexpected main stage result');

      if (currentMainStage.stage !== 'in-game')
        await this.handleMainStages(
          currentMainStage,
          nextMainStage,
          replyToken
        );

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }
}
