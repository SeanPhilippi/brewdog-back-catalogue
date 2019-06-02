import React from 'react';
import Beer from './Beer';

class Home extends React.Component {



  render() {
    return (
      <div className="Home">
        {
          this.props.beers.map(beer => <Beer key={beer.id} beer={beer} checkLiked={this.props.checkLiked} />)
        }
      </div>
    );
  }

}

export default Home;