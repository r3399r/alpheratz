import { inject, injectable } from 'inversify';
import { MessageAccess } from 'src/access/MessageAccess';
import { PutMessageTypeRequest } from 'src/model/api';

/**
 * Service class for Message
 */
@injectable()
export class MessageService {
  @inject(MessageAccess)
  private readonly messageAccess!: MessageAccess;

  public async updateMessageType(id: string, data: PutMessageTypeRequest) {
    const message = await this.messageAccess.findOneByIdOrFail(id);
    message.type = data.type;
    await this.messageAccess.save(message);
  }
}
