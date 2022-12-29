import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/auth/authOperations';
import style from 'components/Form/Form.module.css';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const hadleSubmit = evt => {
    evt.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setPassword('');
  };
  return (
    <div>
      <h1>USER LOGIN</h1>
      <form onSubmit={hadleSubmit}>
        <label className={style.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={style.input}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={style.input}
          />
        </label>
        <div className={style.buttonDiv}>
          <button type="submit" className={style.button}>
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;