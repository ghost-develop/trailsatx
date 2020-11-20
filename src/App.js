import React from 'react';
import styles from './App.module.css';
import { NavBar } from './components';


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {/* <Dashboard /> */}
        <NavBar />
      </div>
    )
  }
}

export default App;