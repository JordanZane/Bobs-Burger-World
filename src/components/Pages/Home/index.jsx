import React from 'react';
import Navigation from '../../Navigation';
const Home = () => {
  return (
    <main className="container">
      <div className="subtitle-container">
        <p className="subtitle">
          Bob's Burgers is an American animated sitcom created by Loren Bouchard
        </p>
        <Navigation />
      </div>
    </main>
  );
};

export default Home;
