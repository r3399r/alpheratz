import { ImageMessage, Message, TextMessage } from '@line/bot-sdk';
import { Message as ConfigMessage } from 'src/constant/config';

export const ConfigMessage2LineMessage = (
  messages: ConfigMessage[],
  quickReply?: string[]
): Message[] => {
  const res = messages.map((v): TextMessage | ImageMessage => {
    if (v.type === 'text')
      return {
        type: 'text',
        text: v.content,
      };
    else
      return {
        type: 'image',
        originalContentUrl: `https://${process.env.PROJECT}-${process.env.ENVR}.s3.ap-southeast-1.amazonaws.com/image/${v.content}`,
        previewImageUrl: `https://${process.env.PROJECT}-${process.env.ENVR}.s3.ap-southeast-1.amazonaws.com/image/${v.content}`,
      };
  });

  if (quickReply)
    res[res.length - 1].quickReply = {
      items: quickReply.map((v) => ({
        type: 'action',
        action: { type: 'message', label: v, text: v },
      })),
    };

  return res;
};
