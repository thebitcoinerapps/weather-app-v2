import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import MainGrid from './components/gridmain';
import GridForecast from './components/gridforecast';
import Spinner from './components/spinner';
import geoCall from './utils/geoapi';
import getForecast from './utils/darkweatherapi';

class App extends Component {

  state = {
    term: null,
    geo: null,
    search: false
  };
  onInputSubmitted = (city)=>{
    this.setState({term: city});
    this.findLatLog(city)
  }
  findLatLog = (city) => {
    this.setState({search: true})
    geoCall(city).then((res)=>{
      this.setState({geo: res.data.results[0].geometry});
      this.setState({search: false});
      let geoCode = (Object.values(this.state.geo).join());
      getForecast(geoCode).then((res)=>{
        console.log(res);
      })

    });
  }




  render() {
    let spinner = null;
    if(this.state.search){
      spinner = <Spinner />
    }else{
      spinner = null;
    }

    return (
      <div className="App">
      <Header />
      <SearchBar onInputSubmitted={this.onInputSubmitted} />
      {spinner}
      {/* <MainGrid />
      <GridForecast /> */}
      </div>
    );
  }
}

export default App;
