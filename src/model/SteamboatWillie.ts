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

class SteamboatWillieTsum extends BaseTsum implements Tsum {
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
    super(Series.SteamboatWillie);
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

export const SteamboatWillie: Tsum[] = [
  new SteamboatWillieTsum({
    id: 112,
    name: 'steamboatMickey',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/b/b4/SteamboatMickey.png',
    gender: G.Male,
  }),
  new SteamboatWillieTsum({
    id: 113,
    name: 'steamboatMinnie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/59/SteamboatMinnie.png',
    gender: G.Female,
  }),
  new SteamboatWillieTsum({
    id: 114,
    name: 'steamboatPete',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/53/SteamboatPete.png',
    gender: G.Male,
  }),
];
