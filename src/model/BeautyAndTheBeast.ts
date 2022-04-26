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

class BeautyAndTheBeastTsum extends BaseTsum implements Tsum {
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
    super(Series.BeautyAndTheBeast);
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

export const BeautyAndTheBeast: Tsum[] = [
  new BeautyAndTheBeastTsum({
    id: 64,
    name: 'belle',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/53/Belle.png',
    gender: G.Female,
  }),
  new BeautyAndTheBeastTsum({
    id: 65,
    name: 'beast',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/1/17/Beast.png',
    gender: G.Male,
  }),
];
