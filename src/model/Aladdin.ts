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

class AladdinTsum extends BaseTsum implements Tsum {
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
    super(Series.Aladdin);
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

export const Aladdin: Tsum[] = [
  new AladdinTsum({
    id: 81,
    name: 'aladdin',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c3/Aladdin.png',
    gender: G.Male,
  }),
  new AladdinTsum({
    id: 82,
    name: 'jasmine',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c1/Jasmine.png',
    gender: G.Female,
  }),
  new AladdinTsum({
    id: 83,
    name: 'abu',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/87/Abu.png',
    gender: G.Male,
  }),
  new AladdinTsum({
    id: 84,
    name: 'genie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/8c/Genie.png',
    gender: G.Male,
  }),
];
