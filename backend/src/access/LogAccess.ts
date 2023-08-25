import { inject, injectable } from 'inversify';
import { FindManyOptions } from 'typeorm';
import { Log, LogEntity } from 'src/model/entity/logEntity';
import { Database } from 'src/util/Database';

/**
 * Access class for Log model.
 */
@injectable()
export class LogAccess {
  @inject(Database)
  private readonly database!: Database;

  public async save(data: Log) {
    const qr = await this.database.getQueryRunner();
    const entity = new LogEntity();
    Object.assign(entity, data);

    return await qr.manager.save(entity);
  }

  public async find(options?: FindManyOptions<Log>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.find<Log>(LogEntity.name, {
      relations: { user: true },
      ...options,
    });
  }
  public async findAndCount(options?: FindManyOptions<Log>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.findAndCount<Log>(LogEntity.name, {
      relations: { user: true },
      ...options,
    });
  }
}
