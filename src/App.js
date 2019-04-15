import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <SearchBar />
      </div>
    );
  }
}

export default App;
