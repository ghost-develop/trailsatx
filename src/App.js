import React from 'react';
// import styles from './App.module.css';
import { NavBar, Cards } from './components';
import { fetchWeatherData, getLocation } from '../src/api/index';

getLocation();


class App extends React.Component {
  render() {
    return (
      <div>    
        <NavBar />
        <Cards />
      </div>
    )
  }
}

export default App;