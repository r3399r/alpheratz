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

class WinnieThePoohTsum extends BaseTsum implements Tsum {
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
    super(Series.WinnieThePooh);
    this.id = tsum.id;
    this.name = tsum.name;
    this.url = tsum.url;
    this.box = tsum.box ?? B.Premium;
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

export const WinnieThePooh: Tsum[] = [
  new WinnieThePoohTsum({
    id: 9,
    name: 'pooh',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/b/bc/Pooh.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Yellow],
    appearance: [A.Eared, A.RoundEars, A.Eyebrows, A.TriangleNose, A.YellowHands],
    skill: [S.StopTime],
    initial: [I.P],
  }),
  new WinnieThePoohTsum({
    id: 10,
    name: 'piglet',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/52/Piglet.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Pink],
    appearance: [
      A.Eared,
      A.PointyEars,
      A.PinkEars,
      A.Eyebrows,
      A.PinkNose,
      A.TriangleNose,
      A.RosyCheeks,
    ],
    initial: [I.P],
  }),
  new WinnieThePoohTsum({
    id: 11,
    name: 'tiger',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c6/Tigger.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Yellow],
    appearance: [A.Eared, A.RoundEars, A.Eyebrows, A.PinkNose, A.TriangleNose, A.YellowHands],
    skill: [S.Burst, S.BurstRandom, S.TailSwishing],
    other: [O.Cat],
    initial: [I.T],
  }),
  new WinnieThePoohTsum({
    id: 12,
    name: 'eeyore',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/49/Eeyore.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Blue, C.Purple],
    appearance: [A.PointyHair, A.Eared, A.FloppyEars, A.PinkEars, A.Eyebrows],
    skill: [S.CallSomeone, S.CallMyTsum],
  }),
  new WinnieThePoohTsum({
    id: 13,
    name: 'christopherRobin',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/04/ChristopherRobin.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Brown],
    appearance: [A.Eared, A.RoundEars, A.Eyebrows, A.RosyCheeks],
  }),
  new WinnieThePoohTsum({
    id: 14,
    name: 'roo',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/2/27/Roo.png',
    box: B.Happiness,
    gender: G.Male,
    color: [C.Brown],
    appearance: [A.PointyHair, A.Eared, A.PointyEars, A.PinkEars, A.Eyebrows, A.TriangleNose],
    skill: [S.Burst, S.BurstVertical],
  }),
  new WinnieThePoohTsum({
    id: 50,
    name: 'bumblebeePooh',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/4/43/BeePooh.png',
    gender: G.Male,
  }),
  new WinnieThePoohTsum({
    id: 66,
    name: 'bunnyPooh',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/66/BunnyPooh.png',
    gender: G.Male,
  }),
  new WinnieThePoohTsum({
    id: 67,
    name: 'bunnyTiger',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/9/92/BunnyTigger.png',
    gender: G.Male,
  }),
  new WinnieThePoohTsum({
    id: 68,
    name: 'rabbit',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/f/fd/Rabbit.png',
    box: B.Happiness,
    gender: G.Male,
  }),
];
