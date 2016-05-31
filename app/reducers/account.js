import keyBy from 'lodash/keyBy';

export default function counter(state = {}, action) {
  switch (action.type) {

    case 'SET_ACCOUNTS':
      state = keyBy(action.payload.accounts, (account) => {
        return account.account_id;
      });
      return state;

    case 'SET_TRANSACTIONS':
      state[action.payload.accountId].transactions = action.payload.transactions;
      return state;

    default:
      return state;
  }
}
