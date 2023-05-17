import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharactersCards from '../../CharactersCard';
import styled from 'styled-components';
import Loader from '../../Loader';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Characters = () => {
  const [isDataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    axios
      .get('https://bobsburgers-api.herokuapp.com/characters')
      .then((response) => {
        setData(response.data);
        setDataLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setDataLoading(false);
      });
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
      {isDataLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <CardsContainer className="cards-container">
          {data.map((character, index) => (
            <CharactersCards key={index} character={character} />
          ))}
        </CardsContainer>
      )}
    </main>
  );
};

export default Characters;
