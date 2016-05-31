export const START_SESSION = 'START_SESSION';
export const END_SESSION = 'END_SESSION';

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
