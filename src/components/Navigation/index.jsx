import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink className={(nav) => (nav.isActive ? 'nav-active' : '')} to="/">
        Home
      </NavLink>
      <NavLink
        className={(nav) => (nav.isActive ? 'nav-active' : '')}
        to="/characters"
      >
        Characters
      </NavLink>
      <NavLink
        className={(nav) => (nav.isActive ? 'nav-active' : '')}
        to="/episodes"
      >
        Episodes
      </NavLink>
    </nav>
  );
};

export default Navigation;
