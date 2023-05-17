import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loader from '../../Loader';
import BurgerCards from '../../BurgerCards';

const BurgerMain = styled.div``;

const BurgerCardsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Burger = () => {
  const [isDataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    axios
      .get('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/')
      .then((response) => {
        setData(response.data);
        setDataLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setDataLoading(false);
      });
  }, []);

  return (
    <main className="container burgers-page">
      {isDataLoading ? (
        <Loader />
      ) : (
        <BurgerMain>
          <h2>Burgers</h2>
          <BurgerCardsContainer>
            {data.map((burgers, index) => (
              <BurgerCards key={index} burgers={burgers} />
            ))}
          </BurgerCardsContainer>
        </BurgerMain>
      )}
    </main>
  );
};

export default Burger;
