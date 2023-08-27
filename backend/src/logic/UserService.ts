import { inject, injectable } from 'inversify';
import { UserAccess } from 'src/access/UserAccess';
import { GetUserResponse } from 'src/model/api';

/**
 * Service class for User
 */
@injectable()
export class UserService {
  @inject(UserAccess)
  private readonly userAccess!: UserAccess;

  public async getAllUsers(): Promise<GetUserResponse> {
    return await this.userAccess.find({ where: { follow: true } });
  }
}
