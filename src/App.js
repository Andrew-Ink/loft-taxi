import './App.css';
import React from 'react';
import { Login } from './components/login/login';
import { Map } from './components/map/map';
import { Profile } from './components/profile/profile';
import { Registration } from './components/registration/registration';

const PAGES = {
  login: Login,
  map: Map,
  profile: Profile,
  registration: Registration
}

class App extends React.Component {

  state = {
    currentPage: 'login'
  }

  navigateTo(page) {
    this.setState({ currentPage: page })
  }

  render() {

    const Page = PAGES[this.state.currentPage]

    return (
      <>{ !(this.state.currentPage === 'login' || this.state.currentPage === 'registration') && 
        <header className="header" >
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <button className="button" onClick={() => {
                  this.navigateTo("map")
                }}>
                  Карта
                </button>
              </li>
              <li className="menu__item">
                <button className="button" onClick={() => {
                  this.navigateTo("profile")
                }}>
                  Профиль
                </button>
              </li>
              <li className="menu__item">
                <button className="button" onClick={() => {
                  this.navigateTo("login")
                }}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header> }
        <main className="main-content">
          <section className="section">
            <Page navigateTo = {this.navigateTo.bind(this)} />
          </section>
        </main>
      </>
    );
  }
}

export default App;
