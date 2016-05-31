export const START_SESSION = 'START_SESSION';
export const END_SESSION = 'END_SESSION';
export const SET_USER_DATA = 'SET_USER_DATA';

export function startSession(access_token) {
  return {
    type: START_SESSION,
    payload: {
      access_token
    }
  };
}

export function endSession() {
  return {
    type: END_SESSION
  };
}

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    payload: {
      userData
    }
  };
}
