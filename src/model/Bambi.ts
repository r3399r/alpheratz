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

class BambiTsum extends BaseTsum implements Tsum {
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
    super(Series.Bambi);
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

export const Bambi: Tsum[] = [
  new BambiTsum({
    id: 37,
    name: 'bambi',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/2d/Bambi.png',
    gender: G.Male,
    color: [C.Brown, C.Yellow],
    appearance: [A.PointyHair, A.Eared, A.Eyeslashes, A.BlackNose, A.YellowHands],
    skill: [S.Burst, S.BurstRandom],
    initial: [I.B],
  }),
  new BambiTsum({
    id: 38,
    name: 'thumper',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/81/Thumper.png',
    gender: G.Male,
    appearance: [A.Eared, A.PointyEars, A.PinkEars, A.PinkNose, A.TriangleNose],
    skill: [S.Burst, S.BurstCenter, S.CallSomeone, S.CallLover],
    other: [O.Rabbit],
    initial: [I.T],
  }),
  new BambiTsum({
    id: 39,
    name: 'missBunny',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/e0/MissBunny.png',
    gender: G.Female,
    color: [C.Yellow],
    appearance: [
      A.Eared,
      A.PointyEars,
      A.PinkEars,
      A.Eyeslashes,
      A.PinkNose,
      A.TriangleNose,
      A.RosyCheeks,
      A.YellowHands,
    ],
    skill: [S.MakeMagicalBubbles, S.MakeItemBubbles],
    other: [O.Rabbit],
    initial: [I.B, I.M],
  }),
];
