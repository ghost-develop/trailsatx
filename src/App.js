import React from 'react';
import styles from './App.module.css';
import { NavBar, Dashboard, Cards } from './components';


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