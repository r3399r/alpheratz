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

export type Tsum = {
  name: string;
  url: string;
  series: Series;
  box: Box;
  gender: Gender;
  color?: Color[];
  appearance?: Appearance[];
  attire?: Attire[];
  skill?: Skill[];
  other?: Other[];
  character?: Character[];
  initial?: Initial[];
};

export class BaseTsum {
  box: Box;
  series: Series;
  constructor(series: Series) {
    this.box = Box.Premium;
    this.series = series;
  }
}
/*
export const tsumList: Tsum[] = [
  {
    name: 'Mickey',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/d/d9/Mickey.png',
    color: [Color.Black],
    appearance: [
      Appearance.Eared,
      Appearance.RoundEars,
      Appearance.BlackNose,
      Appearance.WhiteHands,
    ],
    box: [Box.Happiness],
    gender: Gender.Male,
    skill: [Skill.Burst, Skill.BurstCenter],
    character: [Character.Mickey, Character.MickeyAndFriends],
    initial: [Initial.M],
    series: Series.MickeyAndFriends,
  },
  {
    name: 'Minnie',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/66/Minnie.png',
    box: [Box.Happiness],
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
    series: Series.MickeyAndFriends,
  },
  {
    name: 'Donald',
    url: 'https://static.wikia.nocookie.net/disneytsumtsum/images/6/6f/Donald.png',
    box: [Box.Happiness],
    gender: Gender.Male,
    color: [Color.White],
    appearance: [
      Appearance.PointyHair,
      Appearance.NoEars,
      Appearance.Mouthed,Appearance.Beaked,
      Appearance.RosyCheeks,Appearance.WhiteHands,
    ],
    attire: [Attire.WearRibbon,Attire.WearHat],
    character: [Character.Donald, Character.MickeyAndFriends],
    initial: [Initial.D],
    series: Series.MickeyAndFriends,
  },{
    name:'Daisy',
    url:'https://static.wikia.nocookie.net/disneytsumtsum/images/c/c1/Daisy.png',
    color:[Color.White],
    appearance:[Appearance.NoEars,Appearance.Eyeslashes,
    Appearance.Mouthed,Appearance.Beaked,Appearance.RosyCheeks,Appearance.WhiteHands,],
    attire:[Attire.WearRibbon],
    skill:[Skill.CallSomeone,Skill.CallLover,Skill.MakeHearts],
    gender:Gender.Female,
    box:[Box.Happiness],
    character:[Character.MickeyAndFriends],
    initial:[Initial.D],
    series:Series.MickeyAndFriends
  },{
    name:'Goofy',
    url:'https://static.wikia.nocookie.net/disneytsumtsum/images/e/e5/Goofy.png',
    color:[Color.Black],
    appearance:[Appearance.PointyHair,Appearance.ThreeHaired,Appearance.Eared,Appearance.FloppyEars,Appearance.VisibleEyeWhites,Appearance.BlackNose,Appearance.WhiteHands,],
    attire:[Attire.WearHat],
    skill:[Skill.Burst,Skill.BurstRandom],
    gender:Gender.Male,
    box:[Box.Happiness],
    other:[Other.Dog],
    character:[Character.Goofy,Character.MickeyAndFriends],
    series:Series.MickeyAndFriends
  }
];
*/
