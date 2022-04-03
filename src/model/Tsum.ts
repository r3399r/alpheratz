import {
  Appearance,
  Box,
  Color,
  Gender,
  Initial,
  MickeyAndFriends,
  Other,
  Series,
  Skill,
  Wear,
} from 'src/constant/Category';

export type Tsum = {
  name: string;
  url: string;
  series: Series;
  box?: Box;
  gender?: Gender;
  color?: Color[];
  appearance?: Appearance[];
  wear?: Wear[];
  skill?: Skill[];
  other?: Other[];
  mickeyAndFriends?: MickeyAndFriends[];
  initial?: Initial[];
};

export class BaseTsum {
  box?: Box;
  series: Series;
  constructor(series: Series) {
    this.box = Box.Premium;
    this.series = series;
  }
}
