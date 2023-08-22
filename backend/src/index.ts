import { WebhookRequestBody } from '@line/bot-sdk';
import { LambdaContext, LambdaEvent } from 'src/model/Lambda';
import chat from './routes/chat';

export const handler = async (event: LambdaEvent, _context?: LambdaContext) => {
  switch (event.resource) {
    case '/api/chat':
      if (event.body) await chat(JSON.parse(event.body) as WebhookRequestBody);
      break;
  }

  return {
    statusCode: 200,
  };
};
