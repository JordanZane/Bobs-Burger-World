import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImgSmall from '../../assets/images/logo-small.svg';

const Navigation = () => {
  return (
    <div className="top-page">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logoImgSmall} alt="Bob's Burger World" />
        </NavLink>
      </div>
      <nav>
        <NavLink
          className={(nav) =>
            nav.isActive ? 'nav-active nav-link' : 'nav-link'
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(nav) =>
            nav.isActive ? 'nav-active nav-link' : 'nav-link'
          }
          to="/characters"
        >
          Characters
        </NavLink>
        <NavLink
          className={(nav) =>
            nav.isActive ? 'nav-active nav-link' : 'nav-link'
          }
          to="/burgers"
        >
          Burgers
        </NavLink>

        <NavLink
          className={(nav) =>
            nav.isActive ? 'nav-active nav-link' : 'nav-link'
          }
          to="/episodes"
        >
          Episodes
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
