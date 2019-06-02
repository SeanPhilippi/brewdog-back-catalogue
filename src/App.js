import React from 'react';
import './App.css';
import Beer from './components/Beer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      likedBeers: [],
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(data => data.json())
      .then(beers => {
        console.log('beers', beers)
        this.setState({beers: beers});
      })
  }

  addToLiked = (beer) => {
    console.log('fired')
    this.setState(prevState => {
      return {
        likedBeers: [...prevState.likedBeers, beer]
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.beers.map(beer => <Beer beer={beer} addToLiked={(beer) => this.addToLiked(beer)} />
        )}
      </div>
    );
  }

}

export default App;
