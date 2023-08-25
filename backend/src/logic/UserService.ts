import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { UserAccess } from 'src/access/UserAccess';
import { GetUserResponse } from 'src/model/api';

/**
 * Service class for User
 */
@injectable()
export class UserService {
  @inject(DbAccess)
  private readonly dbAccess!: DbAccess;

  @inject(UserAccess)
  private readonly userAccess!: UserAccess;

  public async cleanup() {
    await this.dbAccess.cleanup();
  }

  public async getAllUsers(): Promise<GetUserResponse> {
    return await this.userAccess.find({ where: { follow: true } });
  }
}
