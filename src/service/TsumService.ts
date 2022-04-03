import { AliceInWonderland } from 'src/model/AliceInWonderland';
import { Bambi } from 'src/model/Bambi';
import { ChipAndDale } from 'src/model/ChipAndDale';
import { Dumbo } from 'src/model/Dumbo';
import { Frozen } from 'src/model/Frozen';
import { LadyAndTheTramp } from 'src/model/LadyAndTheTramp';
import { LiloAndStitch } from 'src/model/LiloAndStitch';
import { LittleMermaid } from 'src/model/LittleMermaid';
import { Maleficent } from 'src/model/Maleficent';
import { MickeyAndFriends } from 'src/model/MickeyAndFriends';
import { MonstersInc } from 'src/model/MonstersInc';
import { OswaldTheLuckyRabbit } from 'src/model/OswaldTheLuckyRabbit';
import { PeterPan } from 'src/model/PeterPan';
import { PhineasAndFerb } from 'src/model/PhineasAndFerb';
import { Tangled } from 'src/model/Tangled';
import { TheAristocats } from 'src/model/TheAristocats';
import { TheNightmareBeforeChristmas } from 'src/model/TheNightmareBeforeChristmas';
import { ToyStory } from 'src/model/ToyStory';
import { Tsum } from 'src/model/Tsum';
import { WinnieThePooh } from 'src/model/WinnieThePooh';

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
