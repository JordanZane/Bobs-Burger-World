import React from 'react';

const CharactersCards = ({ character }) => {
  return (
    <li>
      <div className="img-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="infos">
        <h3>{character.name}</h3>
        <p>{character.occupation}</p>
        <p>Age : {character.age}</p>
        <a
          className="btn"
          href={character.wikiUrl}
          target="_blank"
          rel="noreferrer"
        >
          More infos
        </a>
      </div>
    </li>
  );
};

export default CharactersCards;