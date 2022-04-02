import {
  Appearance,
  Attire,
  Box,
  Character,
  Color,
  Gender,
  Initial,
  Other,
  Series,
  Skill,
} from 'src/constant/Category';
import { BaseTsum, Tsum } from './Tsum';

class MickeyAndFriendsTsum extends BaseTsum implements Tsum {
  name: string;
  url: string;
  color?: Color[];
  appearance?: Appearance[];
  attire?: Attire[];
  skill?: Skill[];
  gender: Gender;
  other?: Other[];
  character?: Character[];
  initial?: Initial[];

  constructor(tsum: Omit<Tsum, 'series'>) {
    super(Series.MickeyAndFriends);
    this.name = tsum.name;
    this.url = tsum.url;
    this.box = tsum.box;
    this.gender = tsum.gender;
    this.color = tsum.color;
    this.appearance = tsum.appearance;
    this.attire = tsum.attire;
    this.character = tsum.character;
    this.initial = tsum.initial;
  }
}

export const MickeyAndFriends: Tsum[] = [
  new MickeyAndFriendsTsum({
    name: 'Mickey',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/d/d9/Mickey.png',
    box: Box.Happiness,
    gender: Gender.Male,
    color: [Color.Black],
    appearance: [
      Appearance.Eared,
      Appearance.RoundEars,
      Appearance.BlackNose,
      Appearance.WhiteHands,
    ],
    skill: [Skill.Burst, Skill.BurstCenter],
    character: [Character.Mickey, Character.MickeyAndFriends],
    initial: [Initial.M],
  }),
  new MickeyAndFriendsTsum({
    name: 'Minnie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/66/Minnie.png',
    box: Box.Happiness,
    gender: Gender.Female,
    color: [Color.Black],
    appearance: [
      Appearance.RoundEars,
      Appearance.Eared,
      Appearance.Eyeslashes,
      Appearance.BlackNose,
      Appearance.RosyCheeks,
      Appearance.WhiteHands,
    ],
    attire: [Attire.WearRibbon],
    skill: [Skill.CallSomeone, Skill.CallLover, Skill.MakeHearts],
    character: [Character.Minnie, Character.MickeyAndFriends],
    initial: [Initial.M],
  }),
  new MickeyAndFriendsTsum({
    name: 'Donald',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/6f/Donald.png',
    box: Box.Happiness,
    gender: Gender.Male,
    color: [Color.White],
    appearance: [
      Appearance.PointyHair,
      Appearance.NoEars,
      Appearance.Mouthed,
      Appearance.Beaked,
      Appearance.RosyCheeks,
      Appearance.WhiteHands,
    ],
    attire: [Attire.WearRibbon, Attire.WearHat],
    character: [Character.Donald, Character.MickeyAndFriends],
    initial: [Initial.D],
  }),
  new MickeyAndFriendsTsum({
    name: 'Daisy',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c1/Daisy.png',
    box: Box.Happiness,
    gender: Gender.Female,
    color: [Color.White],
    appearance: [
      Appearance.NoEars,
      Appearance.Eyeslashes,
      Appearance.Mouthed,
      Appearance.Beaked,
      Appearance.RosyCheeks,
      Appearance.WhiteHands,
    ],
    attire: [Attire.WearRibbon],
    skill: [Skill.CallSomeone, Skill.CallLover, Skill.MakeHearts],
    character: [Character.MickeyAndFriends],
    initial: [Initial.D],
  }),
  new MickeyAndFriendsTsum({
    name: 'Goofy',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/e/e5/Goofy.png',
    box: Box.Happiness,
    gender: Gender.Male,
    color: [Color.Black],
    appearance: [
      Appearance.PointyHair,
      Appearance.ThreeHaired,
      Appearance.Eared,
      Appearance.FloppyEars,
      Appearance.VisibleEyeWhites,
      Appearance.BlackNose,
      Appearance.WhiteHands,
    ],
    attire: [Attire.WearHat],
    skill: [Skill.Burst, Skill.BurstRandom],
    other: [Other.Dog],
    character: [Character.Goofy, Character.MickeyAndFriends],
  }),
];
