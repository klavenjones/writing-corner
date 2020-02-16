import React, { Component } from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';




import logo from './logo.svg';
import Blog from './app/Blog';
import Header from './app/layout/Header';
import Router from './app/layout/Router';
import Footer from './app/layout/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Header />
          <Router />
          <Footer />
        </div>
      </div>
    );
  }
}


fontawesome.library.add(brands, solid);

export default App;
