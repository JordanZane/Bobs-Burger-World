import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImgSmall from '../../assets/images/logo-small.svg';

const Navigation = () => {
  return (
    <div id="top-page" className="top-page">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logoImgSmall} alt="Bob's Burger World" />
        </NavLink>
      </div>
      <nav className="nav-dk">
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
      <nav className="nav-sm">
        <ul>
          <li>
            déroulant
            <ul>
              <li>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? 'nav-active nav-link' : 'nav-link'
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? 'nav-active nav-link' : 'nav-link'
                  }
                  to="/characters"
                >
                  Characters
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? 'nav-active nav-link' : 'nav-link'
                  }
                  to="/burgers"
                >
                  Burgers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? 'nav-active nav-link' : 'nav-link'
                  }
                  to="/episodes"
                >
                  Episodes
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
