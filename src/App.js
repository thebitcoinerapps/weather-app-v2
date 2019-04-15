import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import MainGrid from './components/gridmain';
import GridForecast from './components/gridforecast';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <SearchBar />
      <MainGrid />
      <GridForecast />
      </div>
    );
  }
}

export default App;
