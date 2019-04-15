import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import MainGrid from './components/gridmain';
import GridForecast from './components/gridforecast';
import Spinner from './components/spinner';
import geoCall from './utils/geoapi';
import getForecast from './utils/darkweatherapi';
import ErrorMsg from './components/errormsg';

class App extends Component {

  state = {
    term: null,
    geo: null,
    search: false,
    error: false,
    forecast: null
  };
  onInputSubmitted = (city)=>{
    this.setState({term: city});
    this.findLatLog(city)
  }
  findLatLog = (city) => {
    this.setState({search: true})
    geoCall(city).then((res)=>{
      this.setState({geo: res.data.results[0].geometry});
      this.setState({error: false});
      let geoCode = (Object.values(this.state.geo).join());
      getForecast(geoCode).then((res)=>{
        this.setState({forecast: res.data});
        this.setState({search: false});
      });

    }).catch((err)=>{
        this.setState({error: true});
    });
  }

  render() {
    let maingrid = null;
    let gridforecast = null;
    let spinner = null;
    let error = null;
    if(this.state.search){
      spinner = <Spinner />;
    }else if(!this.state.search && this.state.forecast !== null){
      spinner = null;
      //display details
      maingrid =  <MainGrid state={this.state} />;
      gridforecast = <GridForecast />

    }
    if(this.state.error){
      error = <ErrorMsg />;
    }else{
      error = null;
    }
    console.log(this.state);
    return (
      <div className="App">
      <Header />
      <SearchBar onInputSubmitted={this.onInputSubmitted} />
      {spinner}
      {error}
      {maingrid}
      {gridforecast}
      </div>
    );
  }
}

export default App;
