import React, { Component } from 'react';
import Transaction from '../components/Transaction';

var transactions = [
  {
    accountNumber: '4711951501',
    amount: -300,
    bankCode: '90090042',
    bankName: 'Demobank',
    name: 'Test-Überweisung',
    currency: 'USD'
  },
  {
    accountNumber: '4711951501',
    amount: 1500,
    bankCode: '90090042',
    bankName: 'Demobank',
    booked: true,
    bookingDate: '2013-04-10T12:00:00.000Z',
    bookingText: 'Lastschrift',
    currency: 'EUR',
    name: 'Dr. House Solutions GmbH',
    purpose: 'Miete Vertragsnr. 12993',
  }
]

export default class HomePage extends Component {
  render() {
    return (
      <ol>
        {transactions.map(function(props, index) {
           return <Transaction key={index} {...props} />
        })}
      </ol>
    );
  }
}
