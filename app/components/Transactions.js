import React, { Component, PropTypes } from 'react';

import styles from './Transactions.css';
import Transaction from '../components/Transaction';

export default class Transactions extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    transactions: PropTypes.array.isRequired
  };
  render() {
    const { logout } = this.props;
    return (
      <div>
        <ol>
          {this.props.transactions.map(function(props, index) {
            return <Transaction key={index} {...props} />
          })}
        </ol>
        <button className={styles.btn} onClick={logout}>Logout</button>
      </div>
    );
  }
}
