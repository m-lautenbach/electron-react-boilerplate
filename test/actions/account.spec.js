/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import * as actions from '../../app/actions/account';

describe('actions: account', () => {

  it('set accounts', () => {
    expect(actions.setAccounts([
      {account_id: 'account1', any_property: 'any-data'},
      {account_id: 'account2', any_property: 'any-data'}
    ])).to.deep.equal({
      type: actions.SET_ACCOUNTS,
      payload: {
        accounts: [
          {account_id: 'account1', any_property: 'any-data'},
          {account_id: 'account2', any_property: 'any-data'}
        ]
      }
    });
  });

});
