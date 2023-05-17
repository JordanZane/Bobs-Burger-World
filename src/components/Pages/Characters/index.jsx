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

  function SortAToZ() {
    const sortedData = [...data];
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  }

  function SortZToA() {
    const sortedData = [...data];
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
    setData(sortedData);
  }

  return (
    <main className="container characters-page">
      <ul className="sort-btns-container">
        <button onClick={SortAToZ}>A to Z</button>
        <button onClick={SortZToA}>Z to A</button>
      </ul>
      <ul className="cards-container">
        {data.map((character, index) => (
          <CharactersCards key={index} character={character} />
        ))}
      </ul>
    </main>
  );
};

export default Characters;
