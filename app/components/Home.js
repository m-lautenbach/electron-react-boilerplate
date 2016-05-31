import React, { Component, PropTypes } from 'react';
import styles from './Home.css';


export default class Home extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    requestAccessToken: PropTypes.func.isRequired
  };
  render() {
    const { login, requestAccessToken } = this.props;
    return (
      <div>
        <div className={styles.container}>
          <h2>Figo-Client</h2>
          <button className={styles.btn} onClick={requestAccessToken}>Login</button>
        </div>
      </div>
    );
  }
}
