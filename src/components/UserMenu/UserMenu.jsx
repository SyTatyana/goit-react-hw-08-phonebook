import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'Redux/auth/authSelectors';
import operations from 'Redux/auth/authOperations';

import style from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span className={style.name}>{name}</span>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;