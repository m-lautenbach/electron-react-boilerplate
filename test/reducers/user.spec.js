import { expect } from 'chai';
import userReducer from '../../app/reducers/user';
import {
  startSession,
  endSession
} from '../../app/actions/user';

describe('reducers: user', () => {

  it('should start session by setting access token', () => {
    var INITIAL_STATE = {}
    var action = startSession('any-access-token');
    var state = userReducer(INITIAL_STATE, action);
    expect(state.access_token).to.equal('any-access-token');
  });

  it('should end session by removing access token', () => {
    var INITIAL_STATE = {
      access_token: 'any-access-token'
    }
    var action = endSession();
    var state = userReducer(INITIAL_STATE, action);
    expect(state.access_token).to.equal(null);
  });

});
