import React from 'react';
import styles from './App.module.css';
import { NavBar, Dashboard } from './components';


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar />
        <Dashboard />
      </div>
    )
  }
}

export default App;