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

class DumboTsum extends BaseTsum implements Tsum {
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
    super(Series.Dumbo);
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

export const Dumbo: Tsum[] = [
  new DumboTsum({
    id: 31,
    name: 'dumbo',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/b/b8/Dumbo.png',
    gender: G.Male,
    color: [C.Blue],
    appearance: [A.Eared, A.FloppyEars, A.PinkEars, A.RosyCheeks],
    wear: [W.WearHat],
    skill: [S.Burst, S.BurstVertical],
    initial: [I.D],
  }),
];
