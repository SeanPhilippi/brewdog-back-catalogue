import React from 'react';
import LikeButton from './LikeButton';

const Beer = props => {
  const myStyles = {
    backgroundImage: `url(${props.beer.image_url})`,
    height: '550px',
    width: '120px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  console.log('props', props.beer.image_url)

  return (
    <div className="beer">
      <div className="beer-info">
        <div className="name">{props.beer.name}</div>
        <div className="tagline">{props.beer.tagline}</div>
        <div className="date">first brewed: {props.beer.first_brewed}</div>
        <div className="ph">ph: {props.beer.ph}</div>
        <div className="desc">Description: {props.beer.description}</div>
        <div className="tips">Brewers tips: {props.beer.brewers_tips}</div>
      </div>
      <div
        className="image"
        style={myStyles}>
      </div>
      <LikeButton />
    </div>
  )
}

export default Beer;