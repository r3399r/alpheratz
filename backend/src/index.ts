import { LambdaContext, LambdaEvent } from 'src/model/Lambda';
import { DbAccess } from './access/DbAccess';
import { bindings } from './bindings';
import chat from './routes/chat';
import config from './routes/config';
import log from './routes/log';
import user from './routes/user';
import { errorOutput, successOutput } from './util/lambdaHelper';

export const handler = async (event: LambdaEvent, _context?: LambdaContext) => {
  let db: DbAccess | null = null;
  try {
    console.log(event);
    db = bindings.get(DbAccess);
    let res: any;
    switch (event.resource) {
      case '/api/chat':
        res = await chat(event);
        break;
      case '/api/user':
        res = await user(event);
        break;
      case '/api/log':
        res = await log(event);
        break;
      case '/api/config':
        res = await config(event);
        break;
    }

    return successOutput(res);
  } catch (e) {
    console.log(e);

    return errorOutput(e);
  } finally {
    await db?.cleanup();
  }
};
