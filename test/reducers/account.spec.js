import { expect } from 'chai';
import accountReducer from '../../app/reducers/account';
import {
  setAccounts,
  setTransactions
} from '../../app/actions/account';

describe('reducers: account', () => {

  it('should replace all accounts', () => {
    var INITIAL_STATE = {
      account1: {
        account_id: 'account1',
        anyProperty1: 'any-data1'
      },
      account2: {
        account_id: 'account2',
        anyProperty2: 'any-data2'
      }
    }
    var action = setAccounts([
      {
        account_id: 'account2',
        anyProperty2: 'any-data2X'
      },
      {
        account_id: 'account3',
        anyProperty3: 'any-data3'
      }
    ]);

    var state = accountReducer(INITIAL_STATE, action);
    expect(state).to.deep.equal({
      account2: {
        account_id: 'account2',
        anyProperty2: 'any-data2X'
      },
      account3: {
        account_id: 'account3',
        anyProperty3: 'any-data3'
      }
    });
  });

  it('should replace all transactions of selected account', () => {
    var INITIAL_STATE = {
      account1: {
        account_id: 'account1',
        transactions: [
          {transaction_id: 'transaction1', anyProperty: 'any data1'},
          {transaction_id: 'transaction2', anyProperty: 'any data2'}
        ]
      }
    }
    var action = setTransactions('account1', [
      {transaction_id: 'transaction2', anyProperty: 'any data2b'},
      {transaction_id: 'transaction3', anyProperty: 'any data3'}
    ]);

    var state = accountReducer(INITIAL_STATE, action);
    expect(state).to.deep.equal({
      account1: {
        account_id: 'account1',
        transactions: [
          {transaction_id: 'transaction2', anyProperty: 'any data2b'},
          {transaction_id: 'transaction3', anyProperty: 'any data3'}
        ]
      }
    });
  });

});
