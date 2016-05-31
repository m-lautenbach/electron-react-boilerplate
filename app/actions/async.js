import { push } from 'react-router-redux';
import {
  startSession,
  endSession,
  setUserData
} from './user';
import {
  setAccounts,
  setTransactions
} from './account';

export function login() {
  return (dispatch, getState) => {

    dispatch(startSession('fake-access-token'));

    dispatch(setUserData({
      user_id: 'fake-user',
      language: 'en',
      name: 'Karl-Heinz',
      email: 'fake@user.de',
      address: {
        city: 'Fakehausen',
        company: 'Fake AG',
        country: 'DE',
        postal_code: '12345',
        street: 'Dümpelweg 4',
        street2: 'linker Aufgang'
      }
    }));

    dispatch(setAccounts([
      { account_id: 'fake-account' }
    ]));

    dispatch(setTransactions('fake-account', [
      {
        transaction_id: 'fake-transaction-1',
        account_id: 'fake-account',
        accountNumber: '4711951501',
        amount: -300,
        bankCode: '90090042',
        bankName: 'Demobank',
        name: 'Test-Überweisung',
        currency: 'USD'
      },
      {
        transaction_id: 'fake-transaction-2',
        account_id: 'fake-account',
        accountNumber: '4711951501',
        amount: 1500,
        bankCode: '90090042',
        bankName: 'Demobank',
        booked: true,
        bookingDate: '2013-04-10T12:00:00.000Z',
        bookingText: 'Lastschrift',
        currency: 'EUR',
        name: 'Dr. House Solutions GmbH',
        purpose: 'Miete Vertragsnr. 12993'
      }

    ]));

    dispatch(push('/transactions'));
  };
}

export function logout() {
  return (dispatch, getState) => {

    dispatch(endSession());

    dispatch(push('/'));
  };
}
