import { Client, EventMessage } from '@line/bot-sdk';
import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { LogAccess } from 'src/access/LogAccess';
import { UserAccess } from 'src/access/UserAccess';
import { config } from 'src/constant/config';
import { LogEntity } from 'src/model/entity/logEntity';
import { UserEntity } from 'src/model/entity/userEntity';
import { ConfigMessage2LineMessage } from 'src/util/ConfigHelper';

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

  public async cleanup() {
    await this.dbAccess.cleanup();
  }

  public async follow(userId: string, replyToken: string) {
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
        ConfigMessage2LineMessage(firstStage.message, firstStage.quickReply)
      );

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }

  public async unfollow(userId: string) {
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

  public async message(
    eventMessage: EventMessage,
    userId: string,
    replyToken: string
  ) {
    try {
      await this.dbAccess.startTransaction();
      if (eventMessage.type !== 'text') return;
      const message = eventMessage.text;
      const user = await this.userAccess.findOneById(userId);

      // check status: before-game or in-game
      const currentMainStage = config.main.find(
        (v) => v.stage === user.mainStage
      );
      const nextMainStage = config.main.find(
        (v) => v.prevStage === user.mainStage
      );
      if (currentMainStage === undefined || nextMainStage === undefined)
        throw new Error('unexpected main stage result');

      const passKeywords: string[] = [];
      const failKeywords: string[] = [];
      const hintKeywords: string[] = [];
      currentMainStage.reply?.forEach((v) => {
        if (v.type === 'pass' && v.keyword) passKeywords.push(v.keyword);
        if (v.type === 'fail' && v.keyword) failKeywords.push(v.keyword);
        if (v.type === 'hint' && v.keyword) hintKeywords.push(v.keyword);
      });
      if (currentMainStage.stage !== 'in-game')
        if (passKeywords.includes(message)) {
          user.mainStage = nextMainStage.stage;
          await this.userAccess.save(user);

          const log = new LogEntity();
          log.user = user;
          log.action = 'message';
          log.message = message;
          log.type = 'pass';
          log.attribute = 'main_stage';
          log.oldValue = currentMainStage.stage;
          log.newValue = nextMainStage.stage;
          await this.logAccess.save(log);

          await this.client.replyMessage(
            replyToken,
            ConfigMessage2LineMessage(
              nextMainStage.message,
              nextMainStage.quickReply
            )
          );
        } else if (hintKeywords.includes(message)) {
          const log = new LogEntity();
          log.user = user;
          log.action = 'message';
          log.message = message;
          log.type = 'hint';
          await this.logAccess.save(log);

          const hint = currentMainStage.reply?.find(
            (v) => v.keyword === message
          );
          if (hint?.message)
            await this.client.replyMessage(
              replyToken,
              ConfigMessage2LineMessage(hint.message, hint.quickReply)
            );
        } else if (failKeywords.includes(message)) {
          const log = new LogEntity();
          log.user = user;
          log.action = 'message';
          log.message = message;
          log.type = 'fail';
          await this.logAccess.save(log);

          const fail = currentMainStage.reply?.find(
            (v) => v.keyword === message
          );
          if (fail?.message)
            await this.client.replyMessage(
              replyToken,
              ConfigMessage2LineMessage(fail.message, fail.quickReply)
            );
        } else {
          // const log = new LogEntity();
          // log.user = user;
          // log.action = 'message';
          // log.message = message;
          // log.type = 'fail';
          // await this.logAccess.save(log);
          const defaultFail = currentMainStage.reply?.find(
            (v) => v.keyword === null
          );
          if (defaultFail && defaultFail.message)
            await this.client.replyMessage(
              replyToken,
              ConfigMessage2LineMessage(
                defaultFail.message,
                defaultFail.quickReply
              )
            );
          else
            await this.client.replyMessage(replyToken, {
              type: 'text',
              text: '不對唷！再想想',
            });
        }

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }
}
