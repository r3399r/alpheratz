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

class StarWarsTsum extends BaseTsum implements Tsum {
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
    super(Series.StarWars);
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

export const StarWars: Tsum[] = [
  new StarWarsTsum({
    id: 98,
    name: 'luke',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/4f/Luke.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 99,
    name: 'princessLeia',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/73/PrincessLeia.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 100,
    name: 'r2d2',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/9/96/R2D2.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 101,
    name: 'c3po',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/77/C3PO.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 102,
    name: 'yoda',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/5f/Yoda.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 103,
    name: 'darthVader',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/e5/DarthVader.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 104,
    name: 'bb8',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/52/BB8.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 128,
    name: 'rey',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c0/Rey.png',
    gender: G.Female,
  }),
  new StarWarsTsum({
    id: 129,
    name: 'kyloRen',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/4b/KyloRen.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 130,
    name: 'jediLuke',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/d/d8/JediLuke.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 131,
    name: 'hanSolo',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/3/3e/HanSolo.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 132,
    name: 'chewbacca',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/f/f1/Chewbacca.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 133,
    name: 'k2so',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/74/K-2SO.png',
    gender: G.Male,
  }),
  new StarWarsTsum({
    id: 134,
    name: 'deathTrooper',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/68/DeathTrooper.png',
    gender: G.Male,
  }),
];
