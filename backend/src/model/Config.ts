export type Message = {
  type: 'text' | 'image';
  content: string;
};

export type Reply = PassReply | NotPassReply;

type PassReply = {
  type: 'pass';
  keyword: string;
};

type NotPassReply = {
  type: 'hint' | 'fail';
  keyword: string;
  message: Message[];
};

export type Stage = {
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
