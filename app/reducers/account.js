import keyBy from 'lodash/keyBy';

import {
  SET_ACCOUNTS
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

    default:
      return state;
  }
}
