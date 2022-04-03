import {
  Appearance as A,
  Box as B,
  Color as C,
  Gender as G,
  Initial as I,
  MickeyAndFriends as M,
  Other as O,
  Skill as S,
  Series,
  Wear as W,
} from 'src/constant/Category';
import { BaseTsum, Tsum } from './Tsum';

class ChipAndDaleTsum extends BaseTsum implements Tsum {
  id: number;
  name: string;
  url: string;
  color?: C[];
  appearance?: A[];
  wear?: W[];
  skill?: S[];
  gender?: G;
  other?: O[];
  mickeyAndFriends?: M[];
  initial?: I[];

  constructor(tsum: Omit<Tsum, 'series'>) {
    super(Series.ChipAndDale);
    this.id = tsum.id;
    this.name = tsum.name;
    this.url = tsum.url;
    this.box = tsum.box;
    this.gender = tsum.gender;
    this.color = tsum.color;
    this.appearance = tsum.appearance;
    this.wear = tsum.wear;
    this.skill = tsum.skill;
    this.other = tsum.other;
    this.mickeyAndFriends = tsum.mickeyAndFriends;
    this.initial = tsum.initial;
  }
}

export const ChipAndDale: Tsum[] = [
  new ChipAndDaleTsum({
    id: 7,
    name: 'chip',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/6f/Chip.png',
    box: B.Happiness,
    color: [C.Brown],
    appearance: [A.Eared, A.PointyEars, A.PinkEars, A.BlackNose, A.TriangleNose, A.RosyCheeks],
    skill: [S.CallSomeone, S.CallFriend],
    gender: G.Male,
    mickeyAndFriends: [M.MickeyAndFriends],
  }),
  new ChipAndDaleTsum({
    id: 8,
    name: 'dale',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/1/19/Dale.png',
    box: B.Happiness,
    color: [C.Brown, C.Yellow],
    appearance: [A.Eared, A.PointyEars, A.PinkEars, A.PinkNose, A.RosyCheeks],
    skill: [S.CallSomeone, S.CallFriend],
    gender: G.Male,
    mickeyAndFriends: [M.MickeyAndFriends],
    initial: [I.D],
  }),
];
