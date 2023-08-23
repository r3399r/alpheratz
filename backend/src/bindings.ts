import { Container } from 'inversify';
import 'reflect-metadata';
import { DbAccess } from './access/DbAccess';
import { LogAccess } from './access/LogAccess';
import { UserAccess } from './access/UserAccess';
import { ChatService } from './logic/ChatService';
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

export { container as bindings };