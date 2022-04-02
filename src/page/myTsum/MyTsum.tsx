import { Button, Chip } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Menu from 'src/component/Menu';
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
import { Tsum } from 'src/model/Tsum';
import { getTsumsWithFilter } from 'src/service/TsumService';
import style from './MyTsum.module.scss';

const MyTsum = () => {
  const [tsums, setTsums] = useState<Tsum[]>([]);
  const [color, setColor] = useState<Set<string>>(new Set());
  const [appearance, setAppearance] = useState<Set<string>>(new Set());
  const [attire, setAttire] = useState<Set<string>>(new Set());
  const [skill, setSkill] = useState<Set<string>>(new Set());
  const [gender, setGender] = useState<Set<string>>(new Set());
  const [box, setBox] = useState<Set<string>>(new Set());
  const [other, setOther] = useState<Set<string>>(new Set());
  const [character, setCharacter] = useState<Set<string>>(new Set());
  const [initial, setInitial] = useState<Set<string>>(new Set());
  const [series, setSeries] = useState<Set<string>>(new Set());

  useEffect(() => {
    setTsums(
      getTsumsWithFilter({
        color: [...color],
        appearance: [...appearance],
        attire: [...attire],
        skill: [...skill],
        gender: [...gender],
        box: [...box],
        other: [...other],
        character: [...character],
        initial: [...initial],
        series: [...series],
      }),
    );
  }, [color, appearance, attire, skill, gender, box, other, character, initial, series]);

  const onClear = () => {
    setColor(new Set());
    setAppearance(new Set());
    setAttire(new Set());
    setSkill(new Set());
    setGender(new Set());
    setBox(new Set());
    setOther(new Set());
    setCharacter(new Set());
    setInitial(new Set());
    setSeries(new Set());
  };
  const onDelete = (value: string, setSelected: Dispatch<SetStateAction<Set<string>>>) => () => {
    setSelected((prev) => new Set([...prev].filter((val) => val !== value)));
  };

  return (
    <>
      <div className={style.menu}>
        <Menu label="Color" values={Object.values(Color)} selected={color} setSelected={setColor} />
        <Menu
          label="Appearance"
          values={Object.values(Appearance)}
          selected={appearance}
          setSelected={setAppearance}
        />
        <Menu
          label="Attire"
          values={Object.values(Attire)}
          selected={attire}
          setSelected={setAttire}
        />
        <Menu label="Skill" values={Object.values(Skill)} selected={skill} setSelected={setSkill} />
        <Menu
          label="Gender"
          values={Object.values(Gender)}
          selected={gender}
          setSelected={setGender}
        />
        <Menu label="Box" values={Object.values(Box)} selected={box} setSelected={setBox} />
        <Menu label="Other" values={Object.values(Other)} selected={other} setSelected={setOther} />
        <Menu
          label="Character"
          values={Object.values(Character)}
          selected={character}
          setSelected={setCharacter}
        />
        <Menu
          label="Initial"
          values={Object.values(Initial)}
          selected={initial}
          setSelected={setInitial}
        />
        <Menu
          label="Series"
          values={Object.values(Series)}
          selected={series}
          setSelected={setSeries}
        />
        <Button variant="outlined" color="error" onClick={onClear}>
          Clear
        </Button>
      </div>
      <div className={style.chip}>
        {[...color].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setColor)} />
        ))}
        {[...appearance].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setAppearance)} />
        ))}
        {[...attire].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setAttire)} />
        ))}
        {[...skill].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setSkill)} />
        ))}
        {[...gender].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setGender)} />
        ))}
        {[...box].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setBox)} />
        ))}
        {[...other].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setOther)} />
        ))}
        {[...character].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setCharacter)} />
        ))}
        {[...initial].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setInitial)} />
        ))}
        {[...series].map((v) => (
          <Chip key={v} label={v} onDelete={onDelete(v, setSeries)} />
        ))}
      </div>
      <div className={style.tsum}>
        {tsums.map((v) => (
          <div key={v.name}>
            <img src={v.url} />
            <div>{v.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyTsum;
