import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className="App-header container">
      <Navigation />
      <div className="header-infos">
        <img src={logoImg} alt="Bob's Burger World" />
        <h1>Bob's Burger World</h1>
      </div>
    </header>
  );
};

export default Header;
