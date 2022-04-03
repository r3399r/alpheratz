import {
  Appearance as A,
  Box as B,
  Color as C,
  Gender as G,
  Initial as I,
  MickeyAndFriends as M,
  Other as O,
  Skill as S,
  Series,
  Wear as W,
} from 'src/constant/Category';
import { BaseTsum, Tsum } from './Tsum';

class MickeyAndFriendsTsum extends BaseTsum implements Tsum {
  id: number;
  name: string;
  url: string;
  color?: C[];
  appearance?: A[];
  wear?: W[];
  skill?: S[];
  gender?: G;
  other?: O[];
  mickeyAndFriends?: M[];
  initial?: I[];

  constructor(tsum: Omit<Tsum, 'series'>) {
    super(Series.MickeyAndFriends);
    this.id = tsum.id;
    this.name = tsum.name;
    this.url = tsum.url;
    this.box = tsum.box;
    this.gender = tsum.gender;
    this.color = tsum.color;
    this.appearance = tsum.appearance;
    this.wear = tsum.wear;
    this.skill = tsum.skill;
    this.other = tsum.other;
    this.mickeyAndFriends = tsum.mickeyAndFriends;
    this.initial = tsum.initial;
  }
}

export const MickeyAndFriends: Tsum[] = [
  new MickeyAndFriendsTsum({
    id: 1,
    name: 'mickey',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/d/d9/Mickey.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Black],
    appearance: [A.Eared, A.RoundEars, A.BlackNose, A.WhiteHands],
    skill: [S.Burst, S.BurstCenter],
    mickeyAndFriends: [M.Mickey, M.MickeyAndFriends],
    initial: [I.M],
  }),
  new MickeyAndFriendsTsum({
    id: 2,
    name: 'minnie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/66/Minnie.png',
    box: B.Happiness,
    gender: G.Female,
    color: [C.Black],
    appearance: [A.RoundEars, A.Eared, A.Eyeslashes, A.BlackNose, A.RosyCheeks, A.WhiteHands],
    wear: [W.WearRibbon],
    skill: [S.CallSomeone, S.CallLover, S.MakeHearts],
    mickeyAndFriends: [M.Minnie, M.MickeyAndFriends],
    initial: [I.M],
  }),
  new MickeyAndFriendsTsum({
    id: 3,
    name: 'donald',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/6f/Donald.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.White],
    appearance: [A.PointyHair, A.NoEars, A.Mouthed, A.Beaked, A.RosyCheeks, A.WhiteHands],
    wear: [W.WearRibbon, W.WearHat],
    mickeyAndFriends: [M.Donald, M.MickeyAndFriends],
    initial: [I.D],
  }),
  new MickeyAndFriendsTsum({
    id: 4,
    name: 'daisy',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c1/Daisy.png',
    box: B.Happiness,
    gender: G.Female,
    color: [C.White],
    appearance: [A.NoEars, A.Eyeslashes, A.Mouthed, A.Beaked, A.RosyCheeks, A.WhiteHands],
    wear: [W.WearRibbon],
    skill: [S.CallSomeone, S.CallLover, S.MakeHearts],
    mickeyAndFriends: [M.MickeyAndFriends],
    initial: [I.D],
  }),
  new MickeyAndFriendsTsum({
    id: 5,
    name: 'goofy',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/e5/Goofy.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Black],
    appearance: [
      A.PointyHair,
      A.ThreeHaired,
      A.Eared,
      A.FloppyEars,
      A.VisibleEyeWhites,
      A.BlackNose,
      A.WhiteHands,
    ],
    wear: [W.WearHat],
    skill: [S.Burst, S.BurstRandom],
    other: [O.Dog],
    mickeyAndFriends: [M.Goofy, M.MickeyAndFriends],
  }),
  new MickeyAndFriendsTsum({
    id: 6,
    name: 'pluto',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/3/35/Pluto.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Yellow],
    appearance: [A.Eared, A.FloppyEars, A.BlackNose, A.YellowHands],
    skill: [S.Burst, S.BurstHorizontal],
    other: [O.Dog],
    mickeyAndFriends: [M.MickeyAndFriends],
    initial: [I.P],
  }),
];
