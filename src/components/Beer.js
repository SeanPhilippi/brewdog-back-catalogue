import React from 'react';

const styles = {
  height: '550px',
  width: '120px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default ({
  beer,
  beer: {
    name,
    tagline,
    first_brewed,
    ph,
    description,
    brewers_tips,
    image_url,
  },
  toggleLiked,
  liked,
}) => (
  <div className="beer">
    <div className="beer-info">
      <div className="name">{ name }</div>
      <div className="tagline">{ tagline }</div>
      <div className="date">First brewed: { first_brewed }</div>
      <div className="ph">ph: { ph }</div>
      <div className="desc">Description: { description }</div>
      <div className="tips">Brewers tips: { brewers_tips }</div>
    </div>
    <div
      className="image"
      style={{
        ...styles,
        backgroundImage: `url(${image_url})`,
      }}
    />
    <button
      className="like-btn"
      onClick={() => toggleLiked(beer)}
    >
      { liked ? 'Liked' : 'Like' }
    </button>
  </div>
);
