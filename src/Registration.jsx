import React from 'react';
import WithAuth from './AuthContext';
import logo from './logo.svg';
import './Login-form.css';

const Registration = (props) => {
  const goToMap = (event) => {
    props.navigate('map')
  }
  return (
    <div className="login-page" >
      <div className="login-page_item">
        <a href="/" className="login-page_left">
          <img src={logo} alt="test"/>
        </a>
        <div className="login-page_right">
          <h1>Регистрация</h1>
          <form onSubmit={goToMap}>
            <div className="new-user_text">
              <span>Уже зарегестрированы? </span>
              <button onClick={(event) => { props.navigate('login') }}>Войти</button>
            </div>
            <label className="email_type">
              <input name="username" placeholder="Адрес электронной почты *" required="" type="text" />
            </label>
            <div className="lable-wrap">
              <label className="first-name_type">
                <input name="username" placeholder="Имя *" required="" type="text" />
              </label>
              <label className="last-name_type">
                <input name="username" placeholder="Фамилия *" required="" type="text" />
              </label>
            </div>
            <label className="password_type">
              <input name="password" placeholder="Пароль *" required="" type="password" />
            </label>
            <label className="submit_type">
              <input name="button" required="" type="submit" value="Войти" />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
const RegistrationWithAuth = WithAuth(Registration);
export default RegistrationWithAuth
