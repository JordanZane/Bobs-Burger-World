import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharactersCards from '../../CharactersCard';

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://bobsburgers-api.herokuapp.com/characters')
      .then((response) => setData(response.data));
  }, []);
  return (
    <main class="container">
      <h1>Characters page</h1>
      <ul className="cards-container">
        {data.map((character, index) => (
          <CharactersCards key={index} character={character} />
        ))}
      </ul>
    </main>
  );
};

export default Characters;
