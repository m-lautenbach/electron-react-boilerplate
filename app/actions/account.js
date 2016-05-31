export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';

export function setAccounts(accounts) {
  return {
    type: SET_ACCOUNTS,
    payload: {
      accounts
    }
  };
}

export function setTransactions(accountId, transactions) {
  return {
    type: SET_TRANSACTIONS,
    payload: {
      accountId,
      transactions
    }
  };
}
