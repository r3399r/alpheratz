import { Button, Chip } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from 'src/component/Menu';
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
import { Tsum } from 'src/model/Tsum';
import { getTsumsWithFilter } from 'src/service/TsumService';
import style from './MyTsum.module.scss';

const MyTsum = () => {
  const { t } = useTranslation();
  const [tsums, setTsums] = useState<Tsum[]>([]);
  const [color, setColor] = useState<Set<string>>(new Set());
  const [appearance, setAppearance] = useState<Set<string>>(new Set());
  const [wear, setWear] = useState<Set<string>>(new Set());
  const [skill, setSkill] = useState<Set<string>>(new Set());
  const [gender, setGender] = useState<Set<string>>(new Set());
  const [box, setBox] = useState<Set<string>>(new Set());
  const [other, setOther] = useState<Set<string>>(new Set());
  const [mickeyAndFriends, setMickeyAndFriends] = useState<Set<string>>(new Set());
  const [initial, setInitial] = useState<Set<string>>(new Set());
  const [series, setSeries] = useState<Set<string>>(new Set());

  useEffect(() => {
    setTsums(
      getTsumsWithFilter({
        color: [...color],
        appearance: [...appearance],
        wear: [...wear],
        skill: [...skill],
        gender: [...gender],
        box: [...box],
        other: [...other],
        mickeyAndFriends: [...mickeyAndFriends],
        initial: [...initial],
        series: [...series],
      }),
    );
  }, [color, appearance, wear, skill, gender, box, other, mickeyAndFriends, initial, series]);

  const onClear = () => {
    setColor(new Set());
    setAppearance(new Set());
    setWear(new Set());
    setSkill(new Set());
    setGender(new Set());
    setBox(new Set());
    setOther(new Set());
    setMickeyAndFriends(new Set());
    setInitial(new Set());
    setSeries(new Set());
  };
  const onDelete = (value: string, setSelected: Dispatch<SetStateAction<Set<string>>>) => () => {
    setSelected((prev) => new Set([...prev].filter((val) => val !== value)));
  };

  return (
    <>
      <div className={style.menu}>
        <Menu
          label={t('filter.color')}
          values={Object.values(Color)}
          selected={color}
          setSelected={setColor}
        />
        <Menu
          label={t('filter.appearance')}
          values={Object.values(Appearance)}
          selected={appearance}
          setSelected={setAppearance}
        />
        <Menu
          label={t('filter.wear')}
          values={Object.values(Wear)}
          selected={wear}
          setSelected={setWear}
        />
        <Menu
          label={t('filter.skill')}
          values={Object.values(Skill)}
          selected={skill}
          setSelected={setSkill}
        />
        <Menu
          label={t('filter.gender')}
          values={Object.values(Gender)}
          selected={gender}
          setSelected={setGender}
        />
        <Menu
          label={t('filter.box')}
          values={Object.values(Box)}
          selected={box}
          setSelected={setBox}
        />
        <Menu
          label={t('filter.other')}
          values={Object.values(Other)}
          selected={other}
          setSelected={setOther}
        />
        <Menu
          label={t('filter.mickeyAndFriends')}
          values={Object.values(MickeyAndFriends)}
          selected={mickeyAndFriends}
          setSelected={setMickeyAndFriends}
        />
        <Menu
          label={t('filter.initial')}
          values={Object.values(Initial)}
          selected={initial}
          setSelected={setInitial}
        />
        <Menu
          label={t('filter.series')}
          values={Object.values(Series)}
          selected={series}
          setSelected={setSeries}
        />
        <Button variant="outlined" color="error" onClick={onClear}>
          {t('filter.clear')}
        </Button>
      </div>
      <div className={style.chip}>
        {[...color].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setColor)} />
        ))}
        {[...appearance].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setAppearance)} />
        ))}
        {[...wear].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setWear)} />
        ))}
        {[...skill].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setSkill)} />
        ))}
        {[...gender].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setGender)} />
        ))}
        {[...box].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setBox)} />
        ))}
        {[...other].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setOther)} />
        ))}
        {[...mickeyAndFriends].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setMickeyAndFriends)} />
        ))}
        {[...initial].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setInitial)} />
        ))}
        {[...series].map((v) => (
          <Chip key={v} label={t(`filter.${v}`)} onDelete={onDelete(v, setSeries)} />
        ))}
      </div>
      <div className={style.tsum}>
        {tsums.map((v) => (
          <div key={v.id}>
            <img src={v.url} />
            <div>{t(`tsum.${v.name}`)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyTsum;
