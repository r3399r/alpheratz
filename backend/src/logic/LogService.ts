import { inject, injectable } from 'inversify';
import { DbAccess } from 'src/access/DbAccess';
import { LogAccess } from 'src/access/LogAccess';
import { Pagination } from 'src/model/Pagination';
import { GetLogParams, GetLogResponse } from 'src/model/api';

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

  public async getLogs(params: GetLogParams | null): Promise<Pagination<GetLogResponse>> {
    const limit = params ? Number(params.limit) : 50;
    const offset = params ? Number(params.offset) : 0;

    const res= await this.logAccess.findAndCount({
      where: { userId: params ? params.userId : undefined },
      order: { 'createdAt': 'desc' },
      take: limit, skip: offset
    });

    return {data:res[0],paginate:{limit,offset,count:res[1]}}
  }
}
