import {
  CLIENT_ID,
  CLIENT_SECRET
} from '../figo/figo-client';

const INITIAL_STATE = {
  identifier: CLIENT_ID,
  secret: CLIENT_SECRET
}

export default function counter(state = INITIAL_STATE, action) {
  return state
}
