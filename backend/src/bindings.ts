import { Container } from 'inversify';
import 'reflect-metadata';
import { DbAccess } from './access/DbAccess';
import { LogAccess } from './access/LogAccess';
import { MessageAccess } from './access/MessageAccess';
import { UserAccess } from './access/UserAccess';
import { ChatService } from './logic/ChatService';
import { LogService } from './logic/LogService';
import { MessageService } from './logic/MessageService';
import { UserService } from './logic/UserService';
import { LogEntity } from './model/entity/logEntity';
import { MessageEntity } from './model/entity/messageEntity';
import { UserEntity } from './model/entity/userEntity';
import { Database, dbEntitiesBindingId } from './util/Database';

const container: Container = new Container();

container.bind<Database>(Database).toSelf().inSingletonScope();

// bind repeatedly for db entities
container.bind<Function>(dbEntitiesBindingId).toFunction(UserEntity);
container.bind<Function>(dbEntitiesBindingId).toFunction(LogEntity);
container.bind<Function>(dbEntitiesBindingId).toFunction(MessageEntity);

// db access for tables
container.bind<DbAccess>(DbAccess).toSelf();
container.bind<UserAccess>(UserAccess).toSelf();
container.bind<LogAccess>(LogAccess).toSelf();
container.bind<MessageAccess>(MessageAccess).toSelf();

// service
container.bind<ChatService>(ChatService).toSelf();
container.bind<LogService>(LogService).toSelf();
container.bind<UserService>(UserService).toSelf();
container.bind<MessageService>(MessageService).toSelf();

export { container as bindings };
