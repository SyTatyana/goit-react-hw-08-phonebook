import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/authOperations';
import style from 'components/Form/Form.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setPassword('');
  };

  return (
    <div>
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit}>
        <label className={style.label}>
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleChange}
            className={style.input}
          />
        </label>
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
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterView;