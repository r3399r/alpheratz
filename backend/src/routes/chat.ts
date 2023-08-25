import { WebhookRequestBody } from '@line/bot-sdk';
import { bindings } from 'src/bindings';
import { ChatService } from 'src/logic/ChatService';
import { BindingsHelper } from 'src/util/BindingsHelper';
import { errorOutput, successOutput } from 'src/util/lambdaHelper';

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

    return successOutput();
  } catch (e) {
    console.log(e);

    return errorOutput(e);
  } finally {
    await service?.cleanup();
  }
};

export default chat;
