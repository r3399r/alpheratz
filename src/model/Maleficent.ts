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

class MaleficentTsum extends BaseTsum implements Tsum {
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
    super(Series.Maleficent);
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

export const Maleficent: Tsum[] = [
  new MaleficentTsum({
    id: 44,
    name: 'maleficent',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/e8/Maleficent.png',
    gender: G.Female,
    color: [C.Black, C.White],
    appearance: [A.Eyebrows, A.Eyeslashes, A.Horned, A.WhiteHands],
    wear: [W.WearHat],
    other: [O.Villain],
    initial: [I.M],
  }),
];
