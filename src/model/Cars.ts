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

class CarsTsum extends BaseTsum implements Tsum {
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
    super(Series.Cars);
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

export const Cars: Tsum[] = [
  new CarsTsum({
    id: 74,
    name: 'lightningMcQueen',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/81/McQueen.png',
    gender: G.Male,
  }),
  new CarsTsum({
    id: 75,
    name: 'mater',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/ee/Mater.png',
    gender: G.Male,
  }),
];
