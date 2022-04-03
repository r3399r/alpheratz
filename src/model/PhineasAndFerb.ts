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

class PhineasAndFerbTsum extends BaseTsum implements Tsum {
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
    super(Series.PhineasAndFerb);
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

export const PhineasAndFerb: Tsum[] = [
  new PhineasAndFerbTsum({
    id: 19,
    name: 'perry',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/f/f6/Perry.png',
    gender: G.Male,
    color: [C.Blue, C.Green],
    appearance: [A.PointyHair, A.ThreeHaired, A.VisibleEyeWhites, A.Mouthed, A.Beaked],
    skill: [S.Burst, S.BurstRandom],
    initial: [I.P],
  }),
];
