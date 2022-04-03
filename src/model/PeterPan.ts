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

class PeterPanTsum extends BaseTsum implements Tsum {
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
    super(Series.PeterPan);
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

export const PeterPan: Tsum[] = [
  new PeterPanTsum({
    id: 37,
    name: 'tinkerBell',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/7c/Tinkerbell.png',
    gender: G.Female,
    color: [C.Yellow],
    appearance: [A.TiedHair, A.Eared, A.RoundEars, A.Eyebrows, A.Eyeslashes],
    skill: [S.Burst, S.BurstHorizontal],
    initial: [I.B, I.T],
  }),
];
