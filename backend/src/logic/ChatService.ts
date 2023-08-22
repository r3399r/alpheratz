import { Client } from '@line/bot-sdk';
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
        ConfigMessage2LineMessage(firstStage.message)
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

  public async message() {
    const log = await this.logAccess.find();
    console.log(JSON.stringify(log));
  }
}
