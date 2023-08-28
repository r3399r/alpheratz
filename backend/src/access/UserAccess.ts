import { inject, injectable } from 'inversify';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { User, UserEntity } from 'src/model/entity/userEntity';
import { Database } from 'src/util/Database';

/**
 * Access class for User model.
 */
@injectable()
export class UserAccess {
  @inject(Database)
  private readonly database!: Database;

  public async save(data: User) {
    const qr = await this.database.getQueryRunner();
    const entity = new UserEntity();
    Object.assign(entity, data);

    return await qr.manager.save(entity);
  }

  public async find(options?: FindManyOptions<User>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.find<User>(UserEntity.name, options);
  }

  public async findOne(options: FindOneOptions<User>) {
    const qr = await this.database.getQueryRunner();

    return await qr.manager.findOne<User>(UserEntity.name, options);
  }

  public async findOneById(id: string) {
    return this.findOne({ where: { id } });
  }
}
