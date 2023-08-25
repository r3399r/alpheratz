import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { LogAccess } from 'src/access/LogAccess';
import { GetLogResponse } from 'src/model/api';

/**
 * Service class for Log
 */
@injectable()
export class LogService {
  @inject(DbAccess)
  private readonly dbAccess!: DbAccess;

  @inject(LogAccess)
  private readonly logAccess!: LogAccess;

  public async cleanup() {
    await this.dbAccess.cleanup();
  }

  public async getLogs(): Promise<GetLogResponse> {
    return await this.logAccess.find();
  }
}
