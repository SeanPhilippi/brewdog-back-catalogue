import React from 'react';

class LikeButton extends React.Component {
  state = {
    liked: false,
  }

  handleClick = () => {
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    return (
      <div onClick={() => this.handleClick()} className="button-container">
        <button className="like-button">
          {this.state.liked ? 'Liked' : 'Like'}
        </button>
      </div>
    )
  }
}

export default LikeButton;