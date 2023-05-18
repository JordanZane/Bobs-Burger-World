import React from 'react';

const CharactersCards = ({ character }) => {
  return (
    <li className="reveal">
      <div className="img-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="infos">
        <h3>{character.name}</h3>
        {character.occupation ? (
          <p>occupation : {character.occupation}</p>
        ) : (
          <p>No occupation finds</p>
        )}

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
