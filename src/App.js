import React, { Component } from 'react';
import './app.scss';
import Articles from './components/articles/';
import Trending from './components/trending/';

class App extends Component {
  render() {
    return (
      <div className="wrapper__grid">
        <Articles />
        <Trending />
      </div>
    );
  }
}

export default App;
