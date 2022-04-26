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

class LittleMermaidTsum extends BaseTsum implements Tsum {
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
    super(Series.LittleMermaid);
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

export const LittleMermaid: Tsum[] = [
  new LittleMermaidTsum({
    id: 45,
    name: 'ariel',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/0a/Ariel.png',
    gender: G.Female,
    color: [C.Red],
    appearance: [A.PointyHair, A.Eared, A.RoundEars, A.Eyeslashes, A.RosyCheeks],
    skill: [S.Burst, S.OtherBursts],
    other: [O.Marine, O.Princess],
    initial: [I.A],
  }),
  new LittleMermaidTsum({
    id: 46,
    name: 'flounder',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/85/Flounder.png',
    gender: G.Male,
    color: [C.Yellow],
    appearance: [A.Eyebrows, A.Mouthed, A.RosyCheeks],
    skill: [S.Burst, S.BurstHorizontal, S.CallSomeone, S.CallFriend],
    other: [O.Marine],
  }),
  new LittleMermaidTsum({
    id: 47,
    name: 'sebastian',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/a/a8/Sebastian.png',
    gender: G.Male,
    color: [C.Red],
    appearance: [A.Eyebrows, A.Mouthed, A.RosyCheeks],
    skill: [S.Burst, S.BurstRandom],
    other: [O.Marine],
    initial: [I.S],
  }),
  new LittleMermaidTsum({
    id: 78,
    name: 'romanceAriel',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/b/b4/RomanceAriel.png',
    gender: G.Female,
  }),
  new LittleMermaidTsum({
    id: 79,
    name: 'kingTriton',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/5/52/KingTriton.png',
    gender: G.Male,
  }),
  new LittleMermaidTsum({
    id: 80,
    name: 'scuttle',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/8/89/Scuttle.png',
    gender: G.Male,
  }),
  new LittleMermaidTsum({
    id: 109,
    name: 'ursula',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/a/a4/Ursula.png',
    gender: G.Male,
  }),
];
