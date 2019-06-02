import React from 'react';
import './App.css';
import Home from './components/Home';
import MyList from './components/MyList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = {
    beers: [],
    likedBeers: [],
  };

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(data => data.json())
      .then(beers => {
        console.log('beers', beers)
        this.setState({beers: beers});
      })
  }

  checkLiked = (beer) => {
    if (this.state.likedBeers.find(item => item.id === beer.id)) {
      console.log('found, deleting')
      this.setState(prevState => {
        return {
          likedBeers: [...prevState.likedBeers.filter(item => item.id !== beer.id)]
        }
      })
    } else {
      console.log('adding...')
      this.setState(prevState => {
        return {
          likedBeers: [...prevState.likedBeers, beer]
        }
      })
    }
    // log # of likedBeers in state, delay for async
    setTimeout(() => console.log('likedBeers count: ', this.state.likedBeers.length), 300)

  }

  home = () => <Home checkLiked={(beer) => this.checkLiked(beer)} beers={this.state.beers}/>;
  myList = () => <MyList likedBeers={this.state.likedBeers}/>;

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/mylist">My List</Link>

          <Switch>
            <Route exact path="/" component={this.home} />
            <Route exact path="/mylist" component={this.myList} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
