import React from 'react';
import logo from './logo.svg';
import './App.css';
import Beer from './components/Beer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
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

  render() {
    return (
      <div className="App">
        {this.state.beers.map(beer => <Beer beer={beer}/>
        )}
      </div>
    );
  }

}

export default App;
