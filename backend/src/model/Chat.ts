import { Message } from '@line/bot-sdk';
import { Log } from './entity/logEntity';

/**
 * for keywords, it returns pass, hint, fail
 * for non-keyworkds, it returns defaultFail
 * for last stage + pass keywords, it returns complete
 */
export type HandledItem = {
  status: 'pass' | 'hint' | 'fail' | 'defaultFail' | 'complete';
  logToSave: Log;
  messageToSend: Message[] | null;
};
