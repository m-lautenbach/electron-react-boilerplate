import {
  START_SESSION,
  END_SESSION
} from '../actions/user';

const INITIAL_STATE = {
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_SESSION:
      state.access_token = action.payload.access_token;
      return state;
    case END_SESSION:
      state.access_token = null;
      return state;
    default:
      return state;
  }
}
