import { Button, MenuItem, Menu as MuiMenu } from '@mui/material';
import classNames from 'classnames';
import { Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import style from './Menu.module.scss';

type MenuProps = {
  label: string;
  values: string[];
  selected: Set<string>;
  setSelected: Dispatch<SetStateAction<Set<string>>>;
};

const Menu = ({ label, values, selected, setSelected }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (v: string) => () => {
    if (selected.has(v)) setSelected((prev) => new Set([...prev].filter((val) => val !== v)));
    else setSelected((prev) => new Set(prev.add(v)));
    handleClose();
  };

  return (
    <>
      <Button onClick={handleClick} variant="outlined">
        {label}
      </Button>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {values.map((v) => (
          <MenuItem
            className={classNames({ [style.item]: selected.has(v) })}
            key={v}
            onClick={handleItemClick(v)}
          >
            {v}
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};

export default Menu;
