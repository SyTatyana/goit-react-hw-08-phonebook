import { Oval } from 'react-loader-spinner';
import style from './Loader.module.css';

export const LoaderMini = () => {
  return (
    <div className={style.loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={18}
        width={18}
        strokeWidth={5}
        color=" #2196f3"
        secondaryColor="#fff"
      />
    </div>
  );
};

export const Loader = () => {
  return (
    <div className={style.loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={40}
        width={40}
        strokeWidth={5}
        color=" #fff"
        secondaryColor="#2196f3"
      />
    </div>
  );
};