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

class FrozenTsum extends BaseTsum implements Tsum {
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
    super(Series.Frozen);
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

export const Frozen: Tsum[] = [
  new FrozenTsum({
    id: 40,
    name: 'elsa',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/4a/Elsa.png',
    gender: G.Female,
    appearance: [
      A.PointyHair,
      A.TiedHair,
      A.Eared,
      A.RoundEars,
      A.Eyebrows,
      A.Eyeslashes,
      A.VisibleEyeWhites,
    ],
    wear: [W.WearCrown],
    other: [O.Princess],
  }),
  new FrozenTsum({
    id: 41,
    name: 'anna',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/a/ae/Anna.png',
    gender: G.Female,
    color: [C.Brown],
    appearance: [A.TiedHair, A.Eared, A.RoundEars, A.Eyebrows, A.Eyeslashes, A.VisibleEyeWhites],
    other: [O.Princess],
  }),
  new FrozenTsum({
    id: 42,
    name: 'olaf',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/d/d2/Olaf.png',
    gender: G.Male,
    color: [C.White],
    appearance: [A.PointyHair, A.ThreeHaired, A.Eyebrows, A.Mouthed],
    skill: [S.Burst, S.BurstDiagonal],
  }),
  new FrozenTsum({
    id: 43,
    name: 'sven',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/d/dd/Sven.png',
    gender: G.Male,
    color: [C.Brown],
    appearance: [A.Eared, A.PointyEars, A.Mouthed, A.Horned],
    skill: [S.Burst, S.BurstHorizontal],
    initial: [I.S],
  }),
  new FrozenTsum({
    id: 69,
    name: 'surpriseElsa',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/01/SurpriseElsa.png',
    gender: G.Female,
  }),
  new FrozenTsum({
    id: 70,
    name: 'surpriseAnna',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/2e/BirthdayAnna.png',
    gender: G.Female,
  }),
];
