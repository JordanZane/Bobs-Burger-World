import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main className="container home-page">
      <div className="subtitle-container">
        <p className="subtitle">
          Bob's Burgers is an American animated sitcom created by Loren Bouchard
          <br />
          This site regroup all the informations about the characters and the
          episodes
        </p>
        <div className="btns-container">
          <Link className="btn characters" to="/characters">
            Characters
          </Link>
          <Link className="btn burgers" to="/burgers">
            Burgers
          </Link>
          <Link className="btn episodes" to="/episodes">
            Episodes
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
