import React from 'react';

const EpisodesList = ({ episode }) => {
  return (
    <li>
      <h3>Name : {episode.name}</h3>
      <p>Episode : {episode.id}</p>
      <p>Date : {episode.airDate}</p>
      <p>Total views : {episode.totalViewers}</p>
    </li>
  );
};

export default EpisodesList;
