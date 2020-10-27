import React from 'react';
import logoHeader from './logo-header.svg';
import MapWithAuth from './Map';
import LoginWithAuth from './Login';
import RegistrationWithAuth from './Registration';
import ProofileWithAuth from './Profile';
import withAuth from './AuthContext';
import './Header.css';


class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page })
    } else {
      this.setState({ currentPage: "login" })
    }
  }
  render() {
    const PAGES = {
      map: <MapWithAuth />,
      login: <LoginWithAuth navigate={this.navigateTo} />,
      registration: <RegistrationWithAuth navigate={this.navigateTo} />,
      profile: <ProofileWithAuth navigate={this.navigateTo} />
    };
    
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="header_item">
              <a href="/" className="header_logo">
                <img src={logoHeader} alt="test" />
              </a>
              <div className="header_menu-list">
                <button className="header_menu-item" onClick={() => { this.navigateTo("map") }}>Карта</button>
                <button className="header_menu-item" onClick={() => { this.navigateTo("profile") }}>Профиль</button>
                <button className="header_menu-item" onClick={() => { this.navigateTo("login") }}>Вход</button>
                <button className="header_menu-item" onClick={() => { this.navigateTo("registration") }}>Регистрация</button>
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

export default withAuth(App);
