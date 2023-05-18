import React from 'react';
import burgerImg from '../../assets/images/burger.svg';

const BurgerCards = ({ burgers }) => {
  return (
    <li className="reveal">
      <div className="img-container">
        <img src={burgerImg} alt={burgers.name} />
      </div>
      <div className="infos-container">
        <h3>{burgers.name}</h3>
        <p>Price : {burgers.price}</p>
      </div>
    </li>
  );
};

export default BurgerCards;
