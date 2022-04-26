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

class SnowWhiteTsum extends BaseTsum implements Tsum {
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
    super(Series.SnowWhite);
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

export const SnowWhite: Tsum[] = [
  new SnowWhiteTsum({
    id: 106,
    name: 'snowWhite',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/eb/PrincessSnowWhite.png',
    gender: G.Female,
  }),
  new SnowWhiteTsum({
    id: 110,
    name: 'evilQueen',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/a/ab/Queen.png',
    gender: G.Female,
  }),
];
