import React from 'react';
import Beer from './Beer';

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <div className="site-title">
          BrewDog Back Catalogue
        </div>
        <div className="subheading">
          Explore here
        </div>
        <div className="beers-container">
          {
            this.props.beers.map(beer => <Beer key={beer.id} beer={beer} checkLiked={this.props.checkLiked} />)
          }
        </div>
      </div>
    );
  }

}

export default Home;