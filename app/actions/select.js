export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export function selectAccount(accountId) {
  return {
    type: SELECT_ACCOUNT,
    payload: {
      accountId
    }
  };
}
