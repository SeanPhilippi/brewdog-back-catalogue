import React from 'react';

class LikeButton extends React.Component {
  state = {
    liked: false,
  }

  render() {
    return (
      <div className="button-container">
        <button className="like-button">
          Like
        </button>
      </div>
    )
  }
}

export default LikeButton;