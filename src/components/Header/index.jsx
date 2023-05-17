import React from 'react';
import logoImg from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logoImg} alt="Bob's Burger World" />
      <h1>Bob's Burger World</h1>
    </header>
  );
};

export default Header;
