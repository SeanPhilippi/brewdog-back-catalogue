import React from 'react';
import Beer from './Beer';

class MyList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.likedBeers.map(beer => <Beer key={beer.id} beer={beer}/>)}
      </ul>
    )
  }
}

export default MyList;