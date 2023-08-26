import { Container } from 'inversify';
import 'reflect-metadata';
import { DbAccess } from './access/DbAccess';
import { LogAccess } from './access/LogAccess';
import { UserAccess } from './access/UserAccess';
import { ChatService } from './logic/ChatService';
import { ConfigService } from './logic/ConfigService';
import { LogService } from './logic/LogService';
import { UserService } from './logic/UserService';
import { LogEntity } from './model/entity/logEntity';
import { UserEntity } from './model/entity/userEntity';
import { Database, dbEntitiesBindingId } from './util/Database';

const container: Container = new Container();

container.bind<Database>(Database).toSelf().inSingletonScope();

// bind repeatedly for db entities
container.bind<Function>(dbEntitiesBindingId).toFunction(UserEntity);
container.bind<Function>(dbEntitiesBindingId).toFunction(LogEntity);

// db access for tables
container.bind<DbAccess>(DbAccess).toSelf();
container.bind<UserAccess>(UserAccess).toSelf();
container.bind<LogAccess>(LogAccess).toSelf();

// service
container.bind<ChatService>(ChatService).toSelf();
container.bind<ConfigService>(ConfigService).toSelf();
container.bind<LogService>(LogService).toSelf();
container.bind<UserService>(UserService).toSelf();

export { container as bindings };
