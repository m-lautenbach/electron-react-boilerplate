export function startSession(access_token) {
  return {
    type: 'START_SESSION',
    payload: {
      access_token
    }
  };
}

export function endSession() {
  return {
    type: 'END_SESSION'
  };
}

export function setUserData(userData) {
  return {
    type: 'SET_USER_DATA',
    payload: {
      userData
    }
  };
}
