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

class ToyStoryTsum extends BaseTsum implements Tsum {
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
    super(Series.ToyStory);
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

export const ToyStory: Tsum[] = [
  new ToyStoryTsum({
    id: 24,
    name: 'woody',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/25/Woody.png',
    gender: G.Male,
    color: [C.Brown],
    appearance: [A.Eared, A.RoundEars, A.Eyebrows],
    wear: [W.WearHat],
    skill: [S.Burst, S.BurstCenter],
    other: [O.Pixar],
    initial: [I.P],
  }),
  new ToyStoryTsum({
    id: 25,
    name: 'buzzLightyear',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/4e/Buzz.png',
    gender: G.Male,
    color: [C.Purple],
    appearance: [A.Eyebrows, A.WhiteHands],
    skill: [S.Burst, S.OtherBursts],
    other: [O.Pixar],
    initial: [I.B],
  }),
  new ToyStoryTsum({
    id: 26,
    name: 'jessie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/7/7a/Jessie.png',
    gender: G.Female,
    color: [C.Red],
    appearance: [A.TiedHair, A.Eared, A.RoundEars, A.Eyebrows, A.Eyeslashes, A.RosyCheeks],
    wear: [W.WearRibbon, W.WearHat],
    skill: [S.Burst, S.BurstCenter],
    other: [O.Pixar],
    initial: [I.J],
  }),
  new ToyStoryTsum({
    id: 27,
    name: 'alien',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/1/12/Alien.png',
    gender: G.Unknown,
    color: [C.Green],
    appearance: [A.Eared, A.PointyEars, A.VisibleEyeWhites, A.Mouthed, A.Horned],
    other: [O.Pixar, O.ThreeEyedAlien],
    initial: [I.A],
  }),
  new ToyStoryTsum({
    id: 28,
    name: 'lotso',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/6d/Lotso.png',
    gender: G.Male,
    color: [C.Pink, C.Red],
    appearance: [A.Eared, A.RoundEars, A.PinkEars, A.Eyebrows, A.TriangleNose, A.RosyCheeks],
    skill: [S.Burst, S.BurstBottom],
    other: [O.Pixar, O.Villain],
  }),
  new ToyStoryTsum({
    id: 76,
    name: 'rex',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/5f/Rex.png',
    gender: G.Male,
  }),
];
