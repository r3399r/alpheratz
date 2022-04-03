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

class LiloAndStitchTsum extends BaseTsum implements Tsum {
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
    super(Series.WinnieThePooh);
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

export const LiloAndStitch: Tsum[] = [
  new LiloAndStitchTsum({
    id: 15,
    name: 'stitch',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/5f/Stitch.png',
    gender: G.Male,
    color: [C.Blue],
    appearance: [A.PointyHair, A.Eared, A.PointyEars, A.Mouthed],
    skill: [S.Burst, S.BurstVertical],
    initial: [I.S],
  }),
  new LiloAndStitchTsum({
    id: 16,
    name: 'scrump',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/b/b6/Scrump.png',
    gender: G.Female,
    color: [C.Blue, C.Green],
    appearance: [A.PointyHair, A.TiedHair, A.NoEars, A.Mouthed],
    wear: [W.WearRibbon],
    skill: [
      S.Burst,
      S.BurstCenter,
      S.BurstHorizontal,
      S.BurstRandom,
      S.BurstVertical,
      S.OtherBursts,
    ],
    initial: [I.S],
  }),
];
