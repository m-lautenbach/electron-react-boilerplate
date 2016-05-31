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
import {
  selectAccount
} from './select';

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
      {
        account_id: 'fake-account1',
        account_number: '1234567890',
        iban: 'DE99111111112222222222'
      },
      {
        account_id: 'fake-account2',
        account_number: '9876543210',
        iban: 'DE00888888884444444444'
      }
    ]));

    dispatch(selectAccount('fake-account1'));

    dispatch(setTransactions('fake-account1', [
      {
        transaction_id: 'fake-transaction-1',
        account_id: 'fake-account1',
        accountNumber: '4711951501',
        amount: -300,
        bankCode: '90090042',
        bankName: 'Demobank',
        name: 'Test-Überweisung',
        currency: 'USD'
      },
      {
        transaction_id: 'fake-transaction-1',
        account_id: 'fake-account1',
        accountNumber: '4711951501',
        amount: 723.17,
        bankCode: '99999999',
        bankName: 'BLACK HOLE INC.',
        name: 'annual offering',
        currency: 'USD'
      },
      {
        transaction_id: 'fake-transaction-2',
        account_id: 'fake-account1',
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
