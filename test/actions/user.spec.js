/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import * as actions from '../../app/actions/user';

describe('actions: user', () => {
  it('starts user session', () => {
    expect(actions.startSession('any-access-token')).to.deep.equal({
      type: actions.START_SESSION,
      payload: {
        access_token: 'any-access-token'
      }
    });
  });

  it('ends user session', () => {
    expect(actions.endSession()).to.deep.equal({
      type: actions.END_SESSION
    });
  });

  it('set user data', () => {
    expect(actions.setUserData({x:1, y:'#'})).to.deep.equal({
      type: actions.SET_USER_DATA,
      payload: {
        userData: {
          x: 1,
          y: '#'
        }
      }
    });
  });

});
