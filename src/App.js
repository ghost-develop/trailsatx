import React from 'react';
// import styles from './App.module.css';
import { NavBar, Cards } from './components';
import { fetchWeatherData } from '../src/api/index';

fetchWeatherData();


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