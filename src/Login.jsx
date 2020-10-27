import React from 'react';
import WithAuth from './AuthContext';
import logo from './logo.svg';
import './Login-form.css';
import PropTypes from 'prop-types';


export const Login = (props) => {
  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.logIn(email.value, password.value)
  }
  const goToProfile = (event) => {
    props.navigate('profile')
  }
  LoginWithAuth.propTypes = {
    navigate: PropTypes.func
  };
  return (
    <div>
      {props.isLoggedIn ?
        (<p>Вы вошли <button onClick={goToProfile}>Перейти в профиль</button></p>) :
        (
          < div className="login-page" >
            <div className="login-page_item">
              <a href="/" className="login-page_left">
                <img src={logo} alt="test"/>
              </a>
              <div className="login-page_right">
                <h1>Войти</h1>
                <form onSubmit={authenticate}>
                  <div className="new-user_text">
                    <span>Новый пользователь? </span>
                    <button onClick={(event) => { props.navigate('registration') }}>Зарегистрируйтесь</button>
                  </div>
                  <label className="email_type">
                    <input placeholder="Имя пользователя *" name="email" required="" type="text" />
                  </label>
                  <label className="password_type">
                    <input placeholder="Пароль *" name="password" required="" type="password" />
                  </label>
                  <label className="submit_type">
                    <input name="button" required="" type="submit" value="Войти" />
                  </label>
                </form>
              </div>
            </div>
          </div >
        )
      }
    </div>
  );
}
const LoginWithAuth = WithAuth(Login);
export default LoginWithAuth
