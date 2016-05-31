import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import account from './account';
import user from './user';
import select from './select';

const rootReducer = combineReducers({
  account,
  select,
  user,
  routing
});

export default rootReducer;
