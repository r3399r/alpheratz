import { WebhookRequestBody } from '@line/bot-sdk';
import { bindings } from 'src/bindings';
import { ChatService } from 'src/logic/ChatService';
import { LambdaEvent } from 'src/model/Lambda';
import { BindingsHelper } from 'src/util/BindingsHelper';

const chat = async (event: LambdaEvent) => {
  BindingsHelper.bindClientConfig({
    channelAccessToken: String(process.env.CHANNEL_TOKEN),
  });

  const service = bindings.get(ChatService);

  if (!event.body) throw new Error('body should not be empty');
  const body = JSON.parse(event.body) as WebhookRequestBody;

  for (const event of body.events) {
    if (event.source.type !== 'user') throw new Error('unexpected source type');
    switch (event.type) {
      case 'follow':
        await service.receiveFollow(event.source.userId, event.replyToken);
        break;
      case 'unfollow':
        await service.receiveUnfollow(event.source.userId);
        break;
      case 'message':
        await service.receiveMessage(
          event.message,
          event.source.userId,
          event.replyToken
        );
        break;
    }
  }
};

export default chat;
