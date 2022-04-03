import {
  Appearance as A,
  Color as C,
  Gender as G,
  Initial as I,
  Other as O,
  Skill as S,
  Series,
  Wear as W,
} from 'src/constant/Category';
import { BaseTsum, Tsum } from './Tsum';

class MonstersIncTsum extends BaseTsum implements Tsum {
  id: number;
  name: string;
  url: string;
  color?: C[];
  appearance?: A[];
  wear?: W[];
  skill?: S[];
  gender?: G;
  other?: O[];
  initial?: I[];

  constructor(tsum: Omit<Tsum, 'series'>) {
    super(Series.MonstersInc);
    this.id = tsum.id;
    this.name = tsum.name;
    this.url = tsum.url;
    this.gender = tsum.gender;
    this.color = tsum.color;
    this.appearance = tsum.appearance;
    this.wear = tsum.wear;
    this.skill = tsum.skill;
    this.other = tsum.other;
    this.initial = tsum.initial;
  }
}

export const MonstersInc: Tsum[] = [
  new MonstersIncTsum({
    id: 30,
    name: 'mike',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/03/Mike.png',
    gender: G.Male,
    color: [C.Green],
    appearance: [A.VisibleEyeWhites, A.Horned],
    skill: [S.Burst, S.BurstVertical, S.CallSomeone, S.CallFriend],
    initial: [I.M],
    other: [O.Pixar],
  }),
  new MonstersIncTsum({
    id: 31,
    name: 'sulley',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/ef/Sulley.png',
    gender: G.Male,
    color: [C.Blue],
    appearance: [A.Eyebrows, A.TriangleNose, A.Horned],
    skill: [S.CallSomeone, S.CallMyTsum, S.MakeBigTsum],
    other: [O.Pixar],
    initial: [I.S],
  }),
];
