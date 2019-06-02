import React from 'react';
import Beer from './Beer';

class MyList extends React.Component {

  render() {
    return (
      <div className="mylist-container">
        <h1 className="header">My Liked Beers</h1>
        <ul className="list">
          {this.props.likedBeers.map(beer => <Beer key={beer.id} beer={beer}/>)}
        </ul>
      </div>
    )
  }
}

export default MyList;