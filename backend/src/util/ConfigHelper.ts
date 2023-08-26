import { ImageMessage, Message, TextMessage } from '@line/bot-sdk';
import { Message as ConfigMessage } from 'src/model/Config';

export const toLineMessage = (messages: ConfigMessage[]): Message[] => {
  const res = messages.map((v): TextMessage | ImageMessage => {
    if (v.type === 'text')
      return {
        type: 'text',
        text: v.content,
      };
    else
      return {
        type: 'image',
        originalContentUrl: v.content,
        previewImageUrl: v.content,
      };
  });

  return res;
};
