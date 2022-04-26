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

class PinocchioTsum extends BaseTsum implements Tsum {
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
    super(Series.Pinocchio);
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

export const Pinocchio: Tsum[] = [
  new PinocchioTsum({
    id: 91,
    name: 'pinocchio',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/f/f5/Pinocchio.png',
    gender: G.Male,
  }),
  new PinocchioTsum({
    id: 92,
    name: 'jiminyCricket',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/78/Jiminy.png',
    gender: G.Male,
  }),
];
