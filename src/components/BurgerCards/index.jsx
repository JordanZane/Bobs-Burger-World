import React from 'react';
import burgerImg from '../../assets/images/burger.svg';

const BurgerCards = ({ burgers }) => {
  return (
    <li>
      <div className="img-container">
        <img src={burgerImg} alt={burgers.name} />
      </div>
      <div className="infos-container">
        <h3>{burgers.name}</h3>
        <p>price : {burgers.price}</p>
      </div>
    </li>
  );
};

export default BurgerCards;
