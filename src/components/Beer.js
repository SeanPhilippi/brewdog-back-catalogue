import React from 'react';

class Beer extends React.Component {
  myStyles = {
    backgroundImage: `url(${this.props.beer.image_url})`,
    height: '550px',
    width: '120px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  state = {
    liked: false
  }

  handleClick = () => {
    this.setState({liked: !this.state.liked})
  }

  render() {
    const { name, tagline, first_brewed, ph, description, brewers_tips } = this.props.beer;

    return (
      <div className="beer">
        <div className="beer-info">
          <div className="name">{name}</div>
          <div className="tagline">{tagline}</div>
          <div className="date">first brewed: {first_brewed}</div>
          <div className="ph">ph: {ph}</div>
          <div className="desc">Description: {description}</div>
          <div className="tips">Brewers tips: {brewers_tips}</div>
        </div>
        <div
          className="image"
          style={this.myStyles}>
        </div>
        <button className="like-btn" onClick={() => {this.props.checkLiked(this.props.beer); this.handleClick()}}>
          { this.state.liked ? 'Liked' : 'Like' }
        </button>
      </div>
    )
  }
}

export default Beer;