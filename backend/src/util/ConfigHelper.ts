import { Message } from '@line/bot-sdk';
import { Message as ConfigMessage } from 'src/constant/config';

export const ConfigMessage2LineMessage = (
  messages: ConfigMessage[]
): Message[] =>
  messages.map((v) => {
    if (v.type === 'text')
      return {
        type: 'text',
        text: v.content,
      };
    else
      return {
        type: 'image',
        originalContentUrl:
          'https://venus-prod-y.s3.ap-southeast-1.amazonaws.com/img08150958/invitation.jpg',
        previewImageUrl:
          'https://venus-prod-y.s3.ap-southeast-1.amazonaws.com/img08150958/invitation.jpg',
      };
  });
