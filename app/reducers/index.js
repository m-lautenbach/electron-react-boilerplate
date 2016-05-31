import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import account from './account';
import client from './client';
import select from './select';
import user from './user';

const rootReducer = combineReducers({
  account,
  client,
  select,
  user,
  routing
});

export default rootReducer;
