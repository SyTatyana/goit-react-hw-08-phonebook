import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="contacts" className={style.link}>
          CONTACTS
        </NavLink>
      </nav>
      <UserMenu />
    </>
  );
};

export default Navigation;