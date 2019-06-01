import React from 'react';

const Beer = props => {
  const myStyles = {
    // ! images not rendering
    backgroundImage: "url(${props.beer.image_url})",
  }

  return (
    <div>
      <div className="name">{props.beer.name}</div>
      <div className="ph">ph: props.beer.ph</div>
      <div className="tips">Brewer tips: </div>
      <div className="image" style={myStyles}>
      </div>
    </div>
  )
}

export default Beer;