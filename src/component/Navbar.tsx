import { useNavigate } from 'react-router-dom';
import { Page } from 'src/constant/Page';
import style from './Navbar.module.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const goto = (path: Page) => () => navigate(path);

  return (
    <div className={style.self}>
      <div onClick={goto(Page.MyTsum)}>My Tsum</div>
      <div onClick={goto(Page.Version)}>Version</div>
    </div>
  );
};

export default Navbar;
