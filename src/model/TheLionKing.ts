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

class TheLionKingTsum extends BaseTsum implements Tsum {
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
    super(Series.TheLionKing);
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

export const TheLionKing: Tsum[] = [
  new TheLionKingTsum({
    id: 118,
    name: 'simba',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/9/95/Simba.png',
    gender: G.Male,
  }),
  new TheLionKingTsum({
    id: 119,
    name: 'nala',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/9/9e/Nala.png',
    gender: G.Male,
  }),
  new TheLionKingTsum({
    id: 120,
    name: 'scar',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c7/Scar.png',
    gender: G.Male,
  }),
  new TheLionKingTsum({
    id: 121,
    name: 'zazu',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/0e/Zazu.png',
    gender: G.Male,
  }),
];
