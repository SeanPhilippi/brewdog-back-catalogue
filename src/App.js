import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import MyList from './components/MyList';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends Component {
  state = {
    beers: [],
    likedBeers: [],
  };

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(data => data.json())
      .then(beers => {
        console.log('beers', beers);
        this.setState({ beers });
      })
  }

  toggleLiked = (beer) => {
    const { id: beerId } = beer;
    const { likedBeers } = this.state;

    if (likedBeers.find(({id}) => id === beerId)) {
      console.log('found, deleting');
      this.setState(({ likedBeers }) => ({
        likedBeers: likedBeers.filter(({ id }) => id !== beerId),
      }));
    } else {
      console.log('adding...');
      this.setState(({ likedBeers }) => ({
        likedBeers: [...likedBeers, beer],
      }));
    }
  };

  home = () => {
    const { beers, likedBeers } = this.state;

    return (
      <Home
        toggleLiked={this.toggleLiked}
        beers={beers}
        likedBeers={likedBeers}
      />
    );
  };

  pageNotFound = () => (
    <h1>
      Page not found
    </h1>
  );

  myList = () => (
    <MyList
      toggleLiked={this.toggleLiked}
      likedBeers={this.state.likedBeers}
    />
  );

  render() {
    console.log('likedBeers count: ', this.state.likedBeers.length);

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={this.home} />
            <Route exact path="/mylist" component={this.myList} />
            <Route render={this.pageNotFound()} />
          </Switch>
        </div>
      </Router>
    )
  }
}
