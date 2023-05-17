import React from 'react';

const CharactersCards = ({ character }) => {
  return (
    <li>
      <h3>{character.name}</h3>
      <p>{character.occupation}</p>
    </li>
  );
};

export default CharactersCards;
