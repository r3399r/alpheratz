import { WebhookRequestBody } from '@line/bot-sdk';
import { LambdaContext, LambdaEvent } from 'src/model/Lambda';
import { GetLogParams } from './model/api';
import { HttpError } from './model/error/HttpError';
import chat from './routes/chat';
import config from './routes/config';
import log from './routes/log';
import user from './routes/user';
import { errorOutput } from './util/lambdaHelper';

export const handler = async (event: LambdaEvent, _context?: LambdaContext) => {
  console.log(event);
  switch (event.resource) {
    case '/api/chat':
      if (event.body)
        return await chat(JSON.parse(event.body) as WebhookRequestBody);
      break;
    case '/api/user':
      return await user();
    case '/api/log':
      return await log(event.queryStringParameters as GetLogParams | null);
    case '/api/config':
      return await config();
  }

  return errorOutput(new HttpError(400, 'Invalid resource'));
};
