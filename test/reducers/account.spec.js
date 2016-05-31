import { expect } from 'chai';
import accountReducer from '../../app/reducers/account';
import {
  setAccounts
} from '../../app/actions/account';

describe('reducers: user', () => {

  it('should replace all accounts by given', () => {
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

});
