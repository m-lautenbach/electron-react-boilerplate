import { expect } from 'chai';
import clientReducer from '../../app/reducers/client';
import {
  CLIENT_ID,
  CLIENT_SECRET
} from '../../app/figo/figo-client';


describe('reducers: client', () => {
  var state;

  before(() => {
    state = clientReducer(undefined, {})
  });

  it('should contain client id', () => {
    expect(state.identifier).to.equal(CLIENT_ID);
  });

  it('should contain client secret', () => {
    expect(state.secret).to.equal(CLIENT_SECRET);
  });
});
