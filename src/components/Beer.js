import React from 'react';

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
        <div className="ph">ph: {props.beer.ph}</div>
        <div className="tips">Brewers tips: {props.beer.brewers_tips}</div>
      </div>
      <div
        className="image"
        style={myStyles}>
      </div>
    </div>
  )
}

export default Beer;