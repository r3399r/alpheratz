export type Message = {
  type: 'text' | 'image';
  content: string;
};

export type Reply = PassReply | HintReply | FailReply;

type PassReply = {
  type: 'pass';
  keyword: string;
  message?: Message[];
};

type HintReply = {
  type: 'hint';
  keyword: string;
  message: Message[];
};

type FailReply = {
  type: 'fail';
  keyword: string;
  message: Message[];
};

export type Stage = {
  prevStage: string | null;
  stage: string;
  message: Message[];
  reply?: Reply[];
};

export type Config = {
  main: Stage[];
  fire: Stage[];
  water: Stage[];
  earth: Stage[];
  air: Stage[];
  aether: Stage[];
};
