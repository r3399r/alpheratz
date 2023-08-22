import { WebhookRequestBody } from '@line/bot-sdk';
import { bindings } from 'src/bindings';
import { ChatService } from 'src/logic/ChatService';
import { BindingsHelper } from 'src/util/BindingsHelper';

const chat = async (body: WebhookRequestBody) => {
  let service: ChatService | null = null;
  try {
    BindingsHelper.bindClientConfig({
      channelAccessToken: String(process.env.CHANNEL_TOKEN),
    });

    service = bindings.get(ChatService);

    for (const event of body.events) {
      if (event.source.type !== 'user')
        throw new Error('unexpected source type');
      switch (event.type) {
        case 'follow':
          await service.follow(event.source.userId, event.replyToken);
          break;
        case 'unfollow':
          await service.unfollow(event.source.userId);
          break;
        case 'message':
          await service.message(
            event.message,
            event.source.userId,
            event.replyToken
          );
          break;
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    await service?.cleanup();
  }
};

export default chat;
