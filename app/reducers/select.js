import {
  SELECT_ACCOUNT
} from '../actions/select';

const INITIAL_STATE = {
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SELECT_ACCOUNT:
      state.accountId = action.payload.accountId;
      return state;

    default:
      return state;
  }
}
