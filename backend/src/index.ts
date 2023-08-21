import { WebhookRequestBody } from '@line/bot-sdk';
import { LambdaContext } from 'src/model/Lambda';

export const handler = async (
  event: WebhookRequestBody,
  _context?: LambdaContext
) => {
  console.log(event)
};
