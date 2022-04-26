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

class CinderellaTsum extends BaseTsum implements Tsum {
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
    super(Series.Cinderella);
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

export const Cinderella: Tsum[] = [
  new CinderellaTsum({
    id: 115,
    name: 'cinderella',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/07/Cinderella.png',
    gender: G.Female,
  }),
  new CinderellaTsum({
    id: 116,
    name: 'fairyGodmother',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/a/a1/FairyGodmother.png',
    gender: G.Female,
  }),
  new CinderellaTsum({
    id: 117,
    name: 'princeCharming',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/9/9c/PrinceCharming.png',
    gender: G.Male,
  }),
];
