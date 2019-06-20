import React from 'react';
import Beer from './Beer';

export default ({
  likedBeers,
  toggleLiked,
}) => {
  const renderLikedBeers = () => likedBeers.map(beer => (
    <Beer
      key={beer.id}
      beer={beer}
      toggleLiked={toggleLiked}
      liked
    />
  ));

  return (
    <div className="mylist-container">
      <h1 className="header">
        My Liked Beers
      </h1>
      <ul className="list">
        { renderLikedBeers() }
      </ul>
    </div>
  );
};
