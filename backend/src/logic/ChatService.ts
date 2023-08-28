import { Client, EventMessage } from '@line/bot-sdk';
import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { LogAccess } from 'src/access/LogAccess';
import { MessageAccess } from 'src/access/MessageAccess';
import { UserAccess } from 'src/access/UserAccess';
import { LogEntity } from 'src/model/entity/logEntity';
import { Message, MessageEntity } from 'src/model/entity/messageEntity';
import { UserEntity } from 'src/model/entity/userEntity';

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

  @inject(MessageAccess)
  private readonly messageAccess!: MessageAccess;

  @inject(Client)
  private readonly client!: Client;

  private async getUser(userId: string, isFollow = true) {
    const user = await this.userAccess.findOneById(userId);
    if (user === null) {
      const profile = await this.client.getProfile(userId);
      const follower = new UserEntity();
      follower.id = userId;
      follower.name = profile.displayName;
      follower.pictureUrl = profile.pictureUrl ?? null;
      follower.isFollow = isFollow;

      return await this.userAccess.save(follower);
    }

    return user;
  }

  public async receiveFollow(userId: string) {
    try {
      await this.dbAccess.startTransaction();

      const follower = await this.getUser(userId);

      const log = new LogEntity();
      log.user = follower;
      log.action = 'follow';
      await this.logAccess.save(log);

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }

  public async receiveUnfollow(userId: string) {
    try {
      await this.dbAccess.startTransaction();

      const user = await this.getUser(userId, false);

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

  public async receiveMessage(eventMessage: EventMessage, userId: string) {
    try {
      await this.dbAccess.startTransaction();

      if (eventMessage.type !== 'text') return;
      const text = eventMessage.text;

      const user = await this.getUser(userId);

      let savedMessage: Message | null;

      savedMessage = await this.messageAccess.findOne({
        where: { message: text },
      });
      if (!savedMessage) {
        savedMessage = new MessageEntity();
        savedMessage.message = text;
        savedMessage.type = '失敗'; // default
        savedMessage = await this.messageAccess.save(savedMessage);
      }
      console.log(savedMessage);
      const log = new LogEntity();
      log.user = user;
      log.action = 'message';
      log.message = savedMessage;
      await this.logAccess.save(log);

      await this.dbAccess.commitTransaction();
    } catch (e) {
      await this.dbAccess.rollbackTransaction();
      throw e;
    }
  }
}
