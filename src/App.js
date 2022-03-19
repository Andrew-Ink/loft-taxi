import './App.css';
import React from 'react';
import { LoginWithAuth } from './components/login/login';
import { Map } from './components/map/map';
import { ProfileWithAuth } from './components/profile/profile';
import { Registration } from './components/registration/registration';
import { withAuth } from './components/AuthContext/authContext'


const PAGES = {
  login: (props) => <LoginWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
  registration: (props) => <Registration {...props} />
}

class App extends React.Component {

  state = {
    currentPage: 'login'
  }

  navigateTo(page) {
    // if (this.props.isLoggedIn) {
      this.setState({ currentPage: page })
    // } else {
      // this.setState({ currentPage: 'login' })
    // }
  }

  unauthenticate = () => {
    this.props.logOut();
    this.navigateTo('login');
  }

  render() {

    const Page = PAGES[this.state.currentPage]

    return (
      <>{!(this.state.currentPage === 'login' || this.state.currentPage === 'registration') &&
        <header className="header" >
          <section className='section'>
            <div className="logo-wrapper">
              <img className="logo" src="./img/logo.png" alt="logo" />
              <img className="logo-title" src="./img/logo-title.png" alt="logo" />
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <button className="menu__button" onClick={() => {
                    this.navigateTo("map")
                  }}>
                    Карта
                  </button>
                </li>
                <li className="menu__item">
                  <button className="menu__button" onClick={() => {
                    this.navigateTo("profile")
                  }}>
                    Профиль
                  </button>
                </li>
                <li className="menu__item">
                  <button className="menu__button" onClick={this.unauthenticate}>
                    Выйти
                  </button>
                </li>
              </ul>
            </nav>
          </section>
        </header>}
        <main className="main-content">
          <section className="section">
            <Page navigateTo={this.navigateTo.bind(this)} />
          </section>
        </main>
      </>
    );
  }
}

export default withAuth(App);
