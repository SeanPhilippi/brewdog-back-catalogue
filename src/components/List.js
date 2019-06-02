import React from 'react';
import Beer from './Beer';

class List extends React.Components {
  state = {
    likedBeers: [],
  }

  render() {
    return (
      <ul>
        {this.state.likedBeers.map(beer => <Beer beer={beer}/>)}
      </ul>
    )
  }
}

export default List;