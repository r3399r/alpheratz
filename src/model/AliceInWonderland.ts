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

class AliceInWonderlandTsum extends BaseTsum implements Tsum {
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
    super(Series.AliceInWonderland);
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

export const AliceInWonderland: Tsum[] = [
  new AliceInWonderlandTsum({
    id: 32,
    name: 'alice',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/82/Alice.png',
    gender: G.Female,
    color: [C.Yellow],
    appearance: [A.Eared, A.RoundEars, A.Eyeslashes, A.RosyCheeks],
    wear: [W.WearRibbon],
    skill: [S.MakeBigTsum],
  }),
  new AliceInWonderlandTsum({
    id: 33,
    name: 'whiteRabbit',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/1/1c/WhiteRabbit.png',
    gender: G.Male,
    color: [C.White],
    appearance: [
      A.PointyHair,
      A.Eared,
      A.PointyEars,
      A.PinkEars,
      A.PinkNose,
      A.TriangleNose,
      A.RosyCheeks,
      A.WhiteHands,
    ],
    skill: [S.StopTime],
    initial: [I.S],
  }),
  new AliceInWonderlandTsum({
    id: 34,
    name: 'cheshireCat',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/28/Cheshire.png',
    gender: G.Male,
    color: [C.Pink, C.Red],
    appearance: [
      A.PointyHair,
      A.Eared,
      A.PointyEars,
      A.PinkEars,
      A.Eyebrows,
      A.TriangleNose,
      A.RosyCheeks,
    ],
    skill: [S.Burst, S.BurstRandom, S.TailSwishing],
    other: [O.Cat],
  }),
  new AliceInWonderlandTsum({
    id: 35,
    name: 'littleOyster',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/82/LittleOyster.png',
    gender: G.Unknown,
    color: [C.Pink, C.Purple],
    appearance: [A.Eyebrows, A.Mouthed, A.RosyCheeks],
    wear: [W.WearHat],
    skill: [S.CallSomeone, S.CallMyTsum],
    other: [O.Marine],
  }),
  new AliceInWonderlandTsum({
    id: 123,
    name: 'wonderlandAlice',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/74/WonderlandAlice.png',
    gender: G.Female,
  }),
  new AliceInWonderlandTsum({
    id: 124,
    name: 'queenOfHearts',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/01/QueenofHearts.png',
    gender: G.Female,
  }),
  new AliceInWonderlandTsum({
    id: 125,
    name: 'madHatter',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/a/a9/MadHatter.png',
    gender: G.Male,
  }),
  new AliceInWonderlandTsum({
    id: 126,
    name: 'marchHare',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/3/3a/MarchHare.png',
    gender: G.Male,
  }),
  new AliceInWonderlandTsum({
    id: 127,
    name: 'theatricalMadHatter',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/9/99/FashionableMadHatter.png',
    gender: G.Male,
  }),
];
