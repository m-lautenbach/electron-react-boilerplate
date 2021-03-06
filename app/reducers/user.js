export default function counter(state = {}, action) {
  switch (action.type) {

    case 'START_SESSION':
      state.access_token = action.payload.access_token;
      return state;

    case 'END_SESSION':
      state.access_token = null;
      return state;

    case 'SET_USER_DATA':
      state.data = action.payload.userData;
      return state;

    default:
      return state;
  }
}
