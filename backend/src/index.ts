import { LambdaContext, LambdaEvent } from 'src/model/Lambda';
import { DbAccess } from './access/DbAccess';
import { bindings } from './bindings';
import chat from './routes/chat';
import log from './routes/log';
import message from './routes/message';
import user from './routes/user';
import { errorOutput, successOutput } from './util/lambdaHelper';

export const handler = async (event: LambdaEvent, _context?: LambdaContext) => {
  let db: DbAccess | null = null;
  try {
    console.log(event);
    db = bindings.get(DbAccess);
    let res: any;

    const category = event.resource.split('/')[2];
    switch (category) {
      case 'chat':
        res = await chat(event);
        break;
      case 'user':
        res = await user(event);
        break;
      case 'log':
        res = await log(event);
        break;
      case 'message':
        res = await message(event);
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
