import { inject, injectable } from 'inversify';
import { LogAccess } from 'src/access/LogAccess';
import { GetLogParams, GetLogResponse } from 'src/model/api';
import { Pagination } from 'src/model/Pagination';

/**
 * Service class for Log
 */
@injectable()
export class LogService {
  @inject(LogAccess)
  private readonly logAccess!: LogAccess;

  public async getLogs(
    params: GetLogParams | null
  ): Promise<Pagination<GetLogResponse>> {
    const limit = params ? Number(params.limit) : 50;
    const offset = params ? Number(params.offset) : 0;

    const res = await this.logAccess.findAndCount({
      where: { userId: params ? params.userId : undefined },
      order: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });

    return { data: res[0], paginate: { limit, offset, count: res[1] } };
  }
}
