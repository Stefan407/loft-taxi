import React from 'react';
import logo from './logo.svg';
import './Login-form.css';

export const Registration = () => {
  return (
    <div className="login-page">
      <div className="login-page_item">
        <a href="/" className="login-page_left">
          <img src={logo} />
        </a>
        <div className="login-page_right">
          <h1>Регистрация</h1>
          <form>
            <div className="new-user_text">
              <span>Уже зарегестрированы? </span>
              <a>Войти</a>
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
