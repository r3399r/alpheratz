import { inject, injectable } from 'inversify';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { Message, MessageEntity } from 'src/model/entity/messageEntity';
import { Database } from 'src/util/Database';

/**
 * Access class for Message model.
 */
@injectable()
export class MessageAccess {
  @inject(Database)
  private readonly database!: Database;

  public async save(data: Message) {
    const qr = await this.database.getQueryRunner();
    const entity = new MessageEntity();
    Object.assign(entity, data);

    return await qr.manager.save(entity);
  }

  public async find(options?: FindManyOptions<Message>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.find<Message>(MessageEntity.name, options);
  }

  public async findOne(options: FindOneOptions<Message>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.findOne<Message>(MessageEntity.name, options);
  }

  public async findOneOrFail(options: FindOneOptions<Message>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.findOneOrFail<Message>(MessageEntity.name, options);
  }

  public async findOneByIdOrFail(id: string) {
    return this.findOneOrFail({ where: { id } });
  }
}
