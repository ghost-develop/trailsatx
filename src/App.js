import React from 'react';
import styles from './App.module.css';
import { NavBar, Dashboard, Cards } from './components';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.navContainer}>
          <NavBar />
        </div>
        <div className={styles.dashContainer}>
          <Cards />
        </div>
      </div>
    )
  }
}

export default App;