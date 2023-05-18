import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../Loader';
import styled from 'styled-components';
import EpisodesList from '../../EpisodesList';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const EpisodesMain = styled.div``;

const EpisodesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BtnsSortContainer = styled.nav``;

const Episodes = () => {
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);
  const [seasonFilter, setSeasonFilter] = useState(1);

  useEffect(() => {
    setDataLoading(true);
    axios
      .get('https://bobsburgers-api.herokuapp.com/episodes')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setDataLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setDataLoading(false);
      });
  }, []);

  function handleSeasonFilter(season) {
    setSeasonFilter(season);
  }

  const filteredData = seasonFilter
    ? data.filter((episode) => episode.season === parseInt(seasonFilter))
    : data;

  return (
    <main className="container episodes-page">
      {isDataLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <EpisodesMain>
          <h2>Episodes</h2>
          <BtnsSortContainer>
            <select
              onChange={(e) => handleSeasonFilter(e.target.value)}
              className="deroulant"
            >
              <option value="1">Season 1</option>
              <option value="2">Season 2</option>
              <option value="3">Season 3</option>
              <option value="4">Season 4</option>
              <option value="5">Season 5</option>
              <option value="6">Season 6</option>
              <option value="7">Season 7</option>
              <option value="8">Season 8</option>
              <option value="9">Season 9</option>
              <option value="10">Season 10</option>
              <option value="11">Season 11</option>
              <option value="12">Season 12</option>
            </select>
          </BtnsSortContainer>
          <EpisodesContainer className="episodes-container">
            {filteredData.map((episode, index) => (
              <EpisodesList key={index} episode={episode} />
            ))}
          </EpisodesContainer>
        </EpisodesMain>
      )}
    </main>
  );
};

export default Episodes;
