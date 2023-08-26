import { Config } from './Config';
import { Log } from './entity/logEntity';
import { User } from './entity/userEntity';
import { PaginationParams } from './Pagination';

export type GetUserResponse = User[];

export type GetLogParams = PaginationParams & { userId?: string };

export type GetLogResponse = Log[];

export type GetConfigResponse = Config;
