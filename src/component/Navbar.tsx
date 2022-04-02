import { Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Language } from 'src/constant/Language';
import { Page } from 'src/constant/Page';
import { getLanguage } from 'src/util/i18n';
import style from './Navbar.module.scss';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onMenuClose = () => {
    setAnchorEl(null);
  };
  const onMenuItemClick = (lang: Language) => () => {
    i18n.changeLanguage(lang);
    onMenuClose();
  };

  const goto = (path: Page) => () => navigate(path);

  return (
    <div className={style.self}>
      <div onClick={goto(Page.MyTsum)}>{t('navbar.myTsum')}</div>
      <div onClick={goto(Page.Version)}>{t('navbar.version')}</div>
      <div>
        <div onClick={onMenuClick}>{t('navbar.language')}</div>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={onMenuClose}>
          {Object.values(Language).map((lang) => (
            <MenuItem key={lang} onClick={onMenuItemClick(lang)}>
              {getLanguage(lang)}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
