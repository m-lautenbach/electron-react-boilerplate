import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import client from './client';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
  client,
  counter,
  user,
  routing
});

export default rootReducer;
