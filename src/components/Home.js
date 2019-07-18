import React from 'react';
import Beer from './Beer';

export default ({
  beers,
  toggleLiked,
  likedBeers,
}) => {
  const getLiked = beerId => likedBeers.find(({ id }) => id === beerId);

  const renderBeers = () => beers.map(beer => {
    const { id  } = beer;

    return (
      <Beer
        key={id}
        beer={beer}
        toggleLiked={toggleLiked}
        liked={getLiked(id)}
      />
    );
  });

  return (
    <div className="Home">
      <div className="site-title">
        BrewDog Back Catalogue
      </div>
      <div className="subheading">
        Explore here
      </div>
      <div className="beers-container">
        { renderBeers() }
      </div>
    </div>
  );
}
