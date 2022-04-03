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

class TheAristocatsTsum extends BaseTsum implements Tsum {
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
    super(Series.TheAristocats);
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

export const TheAristocats: Tsum[] = [
  new TheAristocatsTsum({
    id: 17,
    name: 'marie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/2e/Marie.png',
    gender: G.Female,
    color: [C.White],
    appearance: [
      A.PointyHair,
      A.TiedHair,
      A.Eared,
      A.PointyEars,
      A.Eyeslashes,
      A.PinkNose,
      A.TriangleNose,
      A.RosyCheeks,
      A.FacialHair,
      A.WhiteHands,
    ],
    wear: [W.WearRibbon],
    skill: [S.MakeMagicalBubbles],
    other: [O.Cat],
    initial: [I.M],
  }),
];
