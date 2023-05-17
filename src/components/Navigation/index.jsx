import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="btns-container">
      <Link className="btn characters" to="/characters">
        Characters
      </Link>
      <Link className="btn episodes" to="/episodes">
        Episodes
      </Link>
    </div>
  );
};

export default Navigation;
