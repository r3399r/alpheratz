import { ImageMessage, Message, QuickReply, TextMessage } from '@line/bot-sdk';
import { Message as ConfigMessage } from 'src/constant/config';

const generateQuickReply = (quickReply: string[]): QuickReply => ({
  items: quickReply.map((v) => ({
    type: 'action',
    action: { type: 'message', label: v, text: v },
  })),
});

export const toLineMessage = (messages: ConfigMessage[]): Message[] => {
  const res = messages.map((v): TextMessage | ImageMessage => {
    if (v.type === 'text')
      return {
        type: 'text',
        text: v.content,
        quickReply: v.quickReply ? generateQuickReply(v.quickReply) : undefined,
      };
    else
      return {
        type: 'image',
        originalContentUrl: `https://${process.env.PROJECT}-${process.env.ENVR}.s3.ap-southeast-1.amazonaws.com/image/${v.content}`,
        previewImageUrl: `https://${process.env.PROJECT}-${process.env.ENVR}.s3.ap-southeast-1.amazonaws.com/image/${v.content}`,
        quickReply: v.quickReply ? generateQuickReply(v.quickReply) : undefined,
      };
  });

  return res;
};
