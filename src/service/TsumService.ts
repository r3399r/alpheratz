import { MickeyAndFriends } from 'src/model/MickeyAndFriends';
import { Tsum } from 'src/model/Tsum';

export const tsumList: Tsum[] = [...MickeyAndFriends];

export const getTsumsWithFilter = (filter: {
  color: string[];
  appearance: string[];
  attire: string[];
  skill: string[];
  gender: string[];
  box: string[];
  other: string[];
  character: string[];
  initial: string[];
  series: string[];
}) =>
  tsumList
    .filter((v) => filter.color.length === 0 || checker(filter.color, v.color))
    .filter((v) => filter.appearance.length === 0 || checker(filter.appearance, v.appearance))
    .filter((v) => filter.attire.length === 0 || checker(filter.attire, v.attire))
    .filter((v) => filter.skill.length === 0 || checker(filter.skill, v.skill))
    .filter((v) => filter.gender.length === 0 || checker(filter.gender, [v.gender]))
    .filter((v) => filter.box.length === 0 || checker(filter.box, [v.box]))
    .filter((v) => filter.other.length === 0 || checker(filter.other, v.other))
    .filter((v) => filter.character.length === 0 || checker(filter.character, v.character))
    .filter((v) => filter.initial.length === 0 || checker(filter.initial, v.initial))
    .filter((v) => filter.series.length === 0 || checker(filter.series, [v.series]));

const checker = <T extends string>(target: T[], arr?: string[]) =>
  target.every((v) => arr?.includes(v));
