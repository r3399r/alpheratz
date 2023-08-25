import {  PaginationParams } from './Pagination';
import { Log } from './entity/logEntity';
import { User } from './entity/userEntity';

export type GetUserResponse = User[];

export type GetLogParams = PaginationParams & {userId?:string};

export type GetLogResponse =Log[]
