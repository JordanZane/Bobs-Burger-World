import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/characters">
        Characters
      </Link>
      <Link className="nav-link" to="/episodes">
        Episodes
      </Link>
    </nav>
  );
};

export default Navigation;
