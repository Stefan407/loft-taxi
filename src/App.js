import React from 'react';
import logoHeader from './logo-header.svg';
import { Map } from './Map';
import Login from './Login';
import Registration from './Registration';
import { Profile } from './Profile';
import './Header.css';


class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page })
  }

  render() {
    const PAGES = {
      map: <Map />,
      login: <Login navigate={this.navigateTo} />,
      registration: <Registration navigate={this.navigateTo} />,
      profile: <Profile />
    };

    return (<div>
      <header className="header">
        <div className="container">
          <div className="header_item">
            <a href="/" className="header_logo">
              <img src={logoHeader} />
            </a>
            <div className="header_menu-list">
              <a className="header_menu-item" onClick={() => { this.navigateTo("map") }}>Карта</a>
              <a className="header_menu-item" onClick={() => { this.navigateTo("profile") }}>Профиль</a>
              <a className="header_menu-item" onClick={() => { this.navigateTo("login") }}>Вход</a>
              <a className="header_menu-item" onClick={() => { this.navigateTo("registration") }}>Регистрация</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </div>
    )
  }
};

export default App;
