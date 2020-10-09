import React from 'react';
import logo from './logo.svg';
import './Login-form.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-page_item">
        <a href="/" className="login-page_left">
          <img src={logo} />
        </a>
        <div className="login-page_right">
          <h1>Войти</h1>
          <form>
            <div className="new-user_text">
              <span>Новый пользователь? </span>
              <a>Зарегистрируйтесь</a>
            </div>
            <label className="email_type">
              <input name="username" placeholder="Имя пользователя *" required="" type="text" />
            </label>
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

export default Login;