import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import mapProps from 'map-props'
import classNames from 'classnames'
import moment from 'moment'

import styles from './Transaction.css';

@mapProps({
  withdrawal: props => props.amount < 0,
  amount: props => (props.amount < 0 ? '⊖' : '⊕') + `${Math.abs(props.amount)} ${props.currency}`,
  bookingDate: props => moment(props.bookingDate).format('DD.MM.YYYY')
})
class Transaction extends Component {
  static propTypes = {
    accountNumber: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    bankCode: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
    booked: PropTypes.bool,
    //bookingDate: PropTypes.string,
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
      currency,
      name,
      purpose,
      valueDate,
      withdrawal
    } = this.props;

    var metaInfo = <ol className={styles.metaInfo}>
      <li className={styles.accountNumber}>
        <h6>Kontonummer</h6>
        {accountNumber}
      </li>
      <li className={styles.bankCode}>
        <h6>Bankleitzahl</h6>
        {bankCode}
      </li>
      <li className={styles.bankName}>
        <h6>Name der Bank</h6>
        {bankName}
      </li>
      <li className={styles.bookingDate}>
        <h6>Buchungsdatum</h6>
        {bookingDate}
      </li>
    </ol>;

    var css = classNames(styles.container, {
      [styles.withdrawal]: withdrawal
    });

    return (
    <div className={css}>
      <div className={styles.main}>
        <div className={styles.name}>{name}</div>
        <div className={styles.purpose}>{purpose}</div>
        <div className={styles.amount}>{amount}</div>
      </div>
      {metaInfo}
    </div>
    );
  }
}

export default Transaction;
