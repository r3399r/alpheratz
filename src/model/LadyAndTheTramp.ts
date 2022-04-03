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

class LadyAndTheTrampTsum extends BaseTsum implements Tsum {
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
    super(Series.LadyAndTheTramp);
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

export const LadyAndTheTramp: Tsum[] = [
  new LadyAndTheTrampTsum({
    id: 18,
    name: 'lady',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c6/Lady.png',
    gender: G.Female,
    color: [C.Yellow],
    appearance: [
      A.Eared,
      A.FloppyEars,
      A.Eyeslashes,
      A.BlackNose,
      A.TriangleNose,
      A.RosyCheeks,
      A.YellowHands,
    ],
  }),
];
