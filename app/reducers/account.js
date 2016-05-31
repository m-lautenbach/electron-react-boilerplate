import keyBy from 'lodash/keyBy';

import {
  SET_ACCOUNTS,
  SET_TRANSACTIONS
} from '../actions/account';

const INITIAL_STATE = {
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_ACCOUNTS:
      state = keyBy(action.payload.accounts, (account) => {
        return account.account_id;
      });
      return state;

    case SET_TRANSACTIONS:
      state[action.payload.accountId].transactions = action.payload.transactions;
      return state;

    default:
      return state;
  }
}
