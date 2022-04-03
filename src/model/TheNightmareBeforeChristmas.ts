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

class TheNightmareBeforeChristmasTsum extends BaseTsum implements Tsum {
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
    super(Series.TheNightmareBeforeChristmas);
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

export const TheNightmareBeforeChristmas: Tsum[] = [
  new TheNightmareBeforeChristmasTsum({
    id: 21,
    name: 'jackSkellington',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/46/Jack.png',
    gender: G.Male,
    color: [C.White],
    appearance: [A.NoEars, A.BlackNose, A.Mouthed, A.WhiteHands],
    skill: [S.MakeBatsAppear],
    other: [O.Halloween],
    initial: [I.J, I.S],
  }),
  new TheNightmareBeforeChristmasTsum({
    id: 22,
    name: 'holidayJack',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/67/SantaJack.png',
    gender: G.Male,
    color: [C.White],
    appearance: [A.Mouthed, A.FacialHair, A.WhiteHands],
    wear: [W.WearHat],
    other: [O.Halloween],
    initial: [I.J, I.S],
  }),
  new TheNightmareBeforeChristmasTsum({
    id: 23,
    name: 'sally',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/2e/Sally.png',
    gender: G.Female,
    color: [C.Black, C.Green, C.Red],
    appearance: [A.NoEars, A.Eyeslashes, A.Mouthed],
    skill: [S.Burst, S.OtherBursts],
    other: [O.Halloween],
    initial: [I.S],
  }),
  new TheNightmareBeforeChristmasTsum({
    id: 24,
    name: 'zero',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/3/3c/Zero.png',
    gender: G.Male,
    color: [C.White],
    appearance: [A.Eared, A.PointyEars],
    skill: [S.MakeBatsAppear],
    other: [O.Dog, O.Halloween],
  }),
];
