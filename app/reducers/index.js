import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import client from './client';
import counter from './counter';

const rootReducer = combineReducers({
  client,
  counter,
  routing,
  client: (state = {}) => {return state;},
  user: (state = {}) => {return state;}
});

export default rootReducer;
