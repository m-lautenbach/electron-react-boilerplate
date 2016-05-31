export const SET_ACCOUNTS = 'SET_ACCOUNTS';

export function setAccounts(accounts) {
  return {
    type: SET_ACCOUNTS,
    payload: {
      accounts
    }
  };
}
