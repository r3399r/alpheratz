import { Client, EventMessage, Message } from '@line/bot-sdk';
import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { LogAccess } from 'src/access/LogAccess';
import { UserAccess } from 'src/access/UserAccess';
import { config, Reply, Stage } from 'src/constant/config';
import { HandledItem } from 'src/model/Chat';
import { Log, LogEntity } from 'src/model/entity/logEntity';
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

  private getReplyOfStage = (stage: Stage) =>
    stage.reply?.find((v) => v.keyword.toLowerCase() === this.message);

  private getNotPassMessageLog(type: 'hint' | 'fail') {
    const log = new LogEntity();
    log.user = this.user;
    log.action = 'message';
    log.message = this.message;
    log.type = type;

    return log;
  }

  private handleNotPassMessage(reply?: Reply): HandledItem {
    if (reply?.type === 'pass') throw new Error('type should not be pass');
    if (reply === undefined)
      return {
        status: 'defaultFail',
        logToSave: this.getNotPassMessageLog('fail'),
        messageToSend: [
          {
            type: 'text',
            text: '不對唷！再想想',
          },
        ],
      };
    else if (reply.type === 'hint')
      return {
        status: 'hint',
        logToSave: this.getNotPassMessageLog('hint'),
        messageToSend: toLineMessage(reply.message),
      };
    else
      return {
        status: 'fail',
        logToSave: this.getNotPassMessageLog('fail'),
        messageToSend: toLineMessage(reply.message),
      };
  }

  private handleMainStages(currentStage: Stage, nextStage: Stage): HandledItem {
    const reply = currentStage.reply?.find(
      (v) => v.keyword.toLowerCase() === this.message
    );
    if (reply?.type !== 'pass') return this.handleNotPassMessage(reply);
    else {
      this.user.mainStage = nextStage.stage;

      const log = new LogEntity();
      log.user = this.user;
      log.action = 'message';
      log.message = this.message;
      log.type = 'pass';
      log.attribute = 'main_stage';
      log.oldValue = currentStage.stage;
      log.newValue = nextStage.stage;

      return {
        status: 'pass',
        messageToSend: toLineMessage(nextStage.message),
        logToSave: log,
      };
    }
  }

  private handleMinorStages(
    name: 'fire' | 'water' | 'earth' | 'air' | 'aether',
    stage: string | null
  ): HandledItem {
    const mapping = {
      fire: '火',
      water: '水',
      earth: '土',
      air: '風',
      aether: '乙太',
    };
    const currentStage = config[name].find((v) => v.stage === stage);
    const nextStage = config[name].find((v) => v.prevStage === stage);

    if (
      currentStage === undefined &&
      nextStage !== undefined &&
      this.message === mapping[name]
    ) {
      // init stage
      if (name === 'fire') this.user.fireStage = nextStage.stage;
      if (name === 'water') this.user.waterStage = nextStage.stage;
      if (name === 'earth') this.user.earthStage = nextStage.stage;
      if (name === 'air') this.user.airStage = nextStage.stage;
      if (name === 'aether') this.user.aetherStage = nextStage.stage;

      const log = new LogEntity();
      log.user = this.user;
      log.action = 'message';
      log.message = this.message;
      log.type = 'pass';
      log.attribute = `${name}_stage`;
      log.newValue = nextStage.stage;

      return {
        status: 'pass',
        messageToSend: toLineMessage(nextStage.message),
        logToSave: log,
      };
    } else if (currentStage !== undefined && nextStage !== undefined) {
      // middle stages
      const reply = this.getReplyOfStage(currentStage);
      if (reply?.type !== 'pass') return this.handleNotPassMessage(reply);
      else {
        if (name === 'fire') this.user.fireStage = nextStage.stage;
        if (name === 'water') this.user.waterStage = nextStage.stage;
        if (name === 'earth') this.user.earthStage = nextStage.stage;
        if (name === 'air') this.user.airStage = nextStage.stage;
        if (name === 'aether') this.user.aetherStage = nextStage.stage;

        const log = new LogEntity();
        log.user = this.user;
        log.action = 'message';
        log.message = this.message;
        log.type = 'pass';
        log.attribute = `${name}_stage`;
        log.oldValue = currentStage.stage;
        log.newValue = nextStage.stage;

        return {
          status: 'pass',
          messageToSend: toLineMessage(nextStage.message),
          logToSave: log,
        };
      }
    } else if (currentStage !== undefined && nextStage === undefined) {
      // last stage
      const reply = this.getReplyOfStage(currentStage);
      if (reply?.type !== 'pass') return this.handleNotPassMessage(reply);
      else {
        if (name === 'fire') this.user.fireStage = 'complete';
        if (name === 'water') this.user.waterStage = 'complete';
        if (name === 'earth') this.user.earthStage = 'complete';
        if (name === 'air') this.user.airStage = 'complete';
        if (name === 'aether') this.user.aetherStage = 'complete';

        const log = new LogEntity();
        log.user = this.user;
        log.action = 'message';
        log.message = this.message;
        log.type = 'pass';
        log.attribute = `${name}_stage`;
        log.oldValue = currentStage.stage;
        log.newValue = 'complete';

        return {
          status: 'complete',
          messageToSend: reply.message ? toLineMessage(reply.message) : null,
          logToSave: log,
        };
      }
    } else return this.handleNotPassMessage();
  }

  public async receiveMessage(
    eventMessage: EventMessage,
    userId: string,
    replyToken: string
  ) {
    try {
      await this.dbAccess.startTransaction();
      if (eventMessage.type !== 'text') return;
      this.message = eventMessage.text.toLowerCase();
      this.user = await this.userAccess.findOneById(userId);

      let userModified = false;
      let logToSave: Log;
      let messageToSend: Message[] | null;

      // check status is in-game or not
      const mainStage = this.user.mainStage;
      const currentMainStage = config.main.find((v) => v.stage === mainStage);
      const nextMainStage = config.main.find((v) => v.prevStage === mainStage);
      if (currentMainStage === undefined || nextMainStage === undefined)
        throw new Error('unexpected main stage result');

      if (currentMainStage.stage !== 'in-game') {
        const res = this.handleMainStages(currentMainStage, nextMainStage);
        logToSave = res.logToSave;
        messageToSend = res.messageToSend;
        if (res.status === 'pass') userModified = true;
      } else {
        const handledItems: HandledItem[] = [];
        let incompleteStages = 0;

        const fireStage = this.user.fireStage;
        const waterStage = this.user.waterStage;
        const earthStage = this.user.earthStage;
        const airStage = this.user.airStage;
        const aetherStage = this.user.aetherStage;

        if (fireStage !== 'complete') {
          const item = this.handleMinorStages('fire', fireStage);
          if (item.status !== 'complete') incompleteStages += 1;
          handledItems.push(item);
        }
        if (waterStage !== 'complete') {
          const item = this.handleMinorStages('water', waterStage);
          if (item.status !== 'complete') incompleteStages += 1;
          handledItems.push(item);
        }
        if (earthStage !== 'complete') {
          const item = this.handleMinorStages('earth', earthStage);
          if (item.status !== 'complete') incompleteStages += 1;
          handledItems.push(item);
        }
        if (airStage !== 'complete') {
          const item = this.handleMinorStages('air', airStage);
          if (item.status !== 'complete') incompleteStages += 1;
          handledItems.push(item);
        }
        if (aetherStage !== 'complete') {
          const item = this.handleMinorStages('aether', aetherStage);
          if (item.status !== 'complete') incompleteStages += 1;
          handledItems.push(item);
        }

        if (handledItems.length === 0)
          throw new Error('handledItems should not be empty');

        const res =
          handledItems.find((v) => v.status !== 'defaultFail') ??
          handledItems[0];
        logToSave = res.logToSave;
        messageToSend = res.messageToSend;

        if (res.status === 'complete' || res.status === 'pass')
          userModified = true;

        if (res.status === 'complete' && incompleteStages === 0) {
          this.user.mainStage = nextMainStage.stage;

          const log = new LogEntity();
          log.user = this.user;
          log.action = 'message';
          log.message = this.message;
          log.type = 'pass';
          log.attribute = 'main_stage';
          log.oldValue = currentMainStage.stage;
          log.newValue = nextMainStage.stage;

          messageToSend = [
            ...(messageToSend ?? []),
            ...toLineMessage(nextMainStage.message),
          ];
          logToSave = log;
        }
      }

      if (userModified) await this.userAccess.save(this.user);
      await this.logAccess.save(logToSave);
      if (messageToSend)
        await this.client.replyMessage(replyToken, messageToSend);

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }
}
