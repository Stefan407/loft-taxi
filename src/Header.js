import React from 'react';
import logo from './logo-header.svg';
import './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_item">
          <a href="/" className="header_logo">
            <img src={logo} />
          </a>
          <div className="header_menu-list">
            <a className="header_menu-item">Карта</a>
            <a className="header_menu-item">Профиль</a>
            <a className="header_menu-item">Вход</a>
            <a className="header_menu-item">Регистрация</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
