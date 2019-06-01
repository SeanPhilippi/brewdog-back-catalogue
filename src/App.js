import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/')
      .then(data => data.json())
      .then(beers => {
        this.setState({beers: beers});
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.beers.map(beer => {
          return <Beer beer={beer}/>
        })}
      </div>
    );
  }

}

export default App;
