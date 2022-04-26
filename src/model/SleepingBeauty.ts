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

class SleepingBeautyTsum extends BaseTsum implements Tsum {
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
    super(Series.SleepingBeauty);
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

export const SleepingBeauty: Tsum[] = [
  new SleepingBeautyTsum({
    id: 107,
    name: 'princessAurora',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c8/PrincessAurora.png',
    gender: G.Female,
  }),
  new SleepingBeautyTsum({
    id: 111,
    name: 'maleficentDragon',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/2b/MaleficentDragon.png',
    gender: G.Female,
  }),
];
