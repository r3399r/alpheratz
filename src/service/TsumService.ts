import { Aladdin } from 'src/model/Aladdin';
import { AliceInWonderland } from 'src/model/AliceInWonderland';
import { Bambi } from 'src/model/Bambi';
import { BeautyAndTheBeast } from 'src/model/BeautyAndTheBeast';
import { BigHero6 } from 'src/model/BigHero6';
import { Cars } from 'src/model/Cars';
import { ChipAndDale } from 'src/model/ChipAndDale';
import { Cinderella } from 'src/model/Cinderella';
import { Dumbo } from 'src/model/Dumbo';
import { Fantasia } from 'src/model/Fantasia';
import { Frozen } from 'src/model/Frozen';
import { JungleBook } from 'src/model/JungleBook';
import { LadyAndTheTramp } from 'src/model/LadyAndTheTramp';
import { LiloAndStitch } from 'src/model/LiloAndStitch';
import { LittleMermaid } from 'src/model/LittleMermaid';
import { Maleficent } from 'src/model/Maleficent';
import { MickeyAndFriends } from 'src/model/MickeyAndFriends';
import { MonstersInc } from 'src/model/MonstersInc';
import { OswaldTheLuckyRabbit } from 'src/model/OswaldTheLuckyRabbit';
import { PeterPan } from 'src/model/PeterPan';
import { PhineasAndFerb } from 'src/model/PhineasAndFerb';
import { Pinocchio } from 'src/model/Pinocchio';
import { SleepingBeauty } from 'src/model/SleepingBeauty';
import { SnowWhite } from 'src/model/SnowWhite';
import { StarWars } from 'src/model/StarWars';
import { SteamboatWillie } from 'src/model/SteamboatWillie';
import { Tangled } from 'src/model/Tangled';
import { TheAristocats } from 'src/model/TheAristocats';
import { TheGoodDinosaur } from 'src/model/TheGoodDinosaur';
import { TheLionKing } from 'src/model/TheLionKing';
import { TheNightmareBeforeChristmas } from 'src/model/TheNightmareBeforeChristmas';
import { ToyStory } from 'src/model/ToyStory';
import { Tsum } from 'src/model/Tsum';
import { WinnieThePooh } from 'src/model/WinnieThePooh';
import { Zootopia } from 'src/model/Zootopia';

const tsumList: Tsum[] = [
  ...MickeyAndFriends,
  ...ChipAndDale,
  ...WinnieThePooh,
  ...LiloAndStitch,
  ...TheAristocats,
  ...LadyAndTheTramp,
  ...PhineasAndFerb,
  ...OswaldTheLuckyRabbit,
  ...TheNightmareBeforeChristmas,
  ...ToyStory,
  ...MonstersInc,
  ...Dumbo,
  ...AliceInWonderland,
  ...PeterPan,
  ...Bambi,
  ...Frozen,
  ...Maleficent,
  ...LittleMermaid,
  ...Tangled,
  ...BigHero6,
  ...Fantasia,
  ...BeautyAndTheBeast,
  ...Cars,
  ...Aladdin,
  ...Pinocchio,
  ...Zootopia,
  ...StarWars,
  ...TheGoodDinosaur,
  ...SnowWhite,
  ...SleepingBeauty,
  ...SteamboatWillie,
  ...Cinderella,
  ...TheLionKing,
  ...JungleBook,
];

export const getTsumsWithFilter = (filter: {
  color: string[];
  appearance: string[];
  wear: string[];
  skill: string[];
  gender: string[];
  box: string[];
  other: string[];
  mickeyAndFriends: string[];
  initial: string[];
  series: string[];
}) =>
  tsumList
    .sort((a, b) => (a.id > b.id ? 1 : -1))
    .filter((v) => filter.color.length === 0 || checker(filter.color, v.color))
    .filter((v) => filter.appearance.length === 0 || checker(filter.appearance, v.appearance))
    .filter((v) => filter.wear.length === 0 || checker(filter.wear, v.wear))
    .filter((v) => filter.skill.length === 0 || checker(filter.skill, v.skill))
    .filter((v) => filter.gender.length === 0 || checker(filter.gender, v.gender ? [v.gender] : []))
    .filter((v) => filter.box.length === 0 || checker(filter.box, v.box ? [v.box] : []))
    .filter((v) => filter.other.length === 0 || checker(filter.other, v.other))
    .filter(
      (v) =>
        filter.mickeyAndFriends.length === 0 ||
        checker(filter.mickeyAndFriends, v.mickeyAndFriends),
    )
    .filter((v) => filter.initial.length === 0 || checker(filter.initial, v.initial))
    .filter((v) => filter.series.length === 0 || checker(filter.series, [v.series]));

const checker = <T extends string>(target: T[], arr?: string[]) =>
  target.every((v) => arr?.includes(v));
