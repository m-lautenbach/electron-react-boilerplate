import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import mapProps from 'map-props'
import styles from './Transaction.css';

@mapProps({
  amount: props => `${props.amount} ${props.currency}`
})
class Transaction extends Component {
  static propTypes = {
    accountNumber: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    bankCode: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
    booked: PropTypes.bool,
    bookingDate: PropTypes.string,
    bookingText: PropTypes.string,
    currency: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    purpose: PropTypes.string,
    valueDate: PropTypes.string,
  }

  render() {
    const {
      accountNumber,
      amount,
      bankCode,
      bankName,
      booked,
      bookingDate,
      bookingText,
      name,
      purpose,
      valueDate,
    } = this.props;

    var bookInfo;

    if (booked) {
      bookInfo = <dl className={styles.bookInfo}>
        <dt>Buchungsdatum</dt>
        <dd>{bookingDate}</dd>
        <dt>Buchungstext</dt>
        <dd>{bookingText}</dd>
      </dl>
    }

    return (
      <div className={styles.transaction}>
        <div className="main">
          <div className={styles.name}>{name}</div>
          <div className={styles.purpose}>{purpose}</div>
          <div className={styles.amount}>{amount}</div>
        </div>
        <dl>
          <dt className={styles.accountNumber}>Kontonummer</dt>
          <dd className={styles.accountNumber}>{accountNumber}</dd>
          <dt className={styles.bankCode}>Bankleitzahl</dt>
          <dd className={styles.bankCode}>{bankCode}</dd>
          <dt className={styles.bankName}>Name der Bank</dt>
          <dd className={styles.bankName}>{bankName}</dd>
        </dl>
        {bookInfo}
      </div>
    );
  }
}

export default Transaction;
