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

class TangledTsum extends BaseTsum implements Tsum {
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
    super(Series.Tangled);
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

export const Tangled: Tsum[] = [
  new TangledTsum({
    id: 49,
    name: 'rapunzel',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/f/fd/Rapunzel.png',
    gender: G.Female,
    color: [C.Yellow],
    appearance: [A.TiedHair, A.Eared, A.RoundEars, A.Eyebrows, A.Eyeslashes],
    wear: [W.WithFollowers],
    skill: [S.CallSomeone, S.CallLover],
    other: [O.Princess],
  }),
  new TangledTsum({
    id: 50,
    name: 'pascal',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/0/0b/Pascal.png',
    gender: G.Male,
    color: [C.Green],
    appearance: [A.VisibleEyeWhites, A.Mouthed],
    skill: [S.CallSomeone, S.CallOthers],
    initial: [I.P],
  }),
];
