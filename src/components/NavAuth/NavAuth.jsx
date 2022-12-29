import { NavLink } from 'react-router-dom';
import style from 'components/UserMenu/UserMenu.module.css';

const NavAuth = () => {
  return (
    <div>
      <button className={style.button}>
        <NavLink to="/register" className={style.link}>
          {' '}
          REGISTER
        </NavLink>
      </button>
      <button className={style.button}>
        <NavLink to="/login" className={style.link}>
          {' '}
          LOG IN
        </NavLink>
      </button>
    </div>
  );
};

export default NavAuth;