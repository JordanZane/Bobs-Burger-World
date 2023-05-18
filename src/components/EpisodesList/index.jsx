import React from 'react';

const EpisodesList = ({ episode }) => {
  return (
    <li className="reveal">
      <p>Episode N° {episode.id}</p>
      <h3>Name : {episode.name}</h3>
      <p>Date : {episode.airDate}</p>
      <p>Total views : {episode.totalViewers}</p>
    </li>
  );
};

export default EpisodesList;
