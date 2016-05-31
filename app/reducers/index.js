import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
  routing,
  client: (state = {}) => {return state;},
  user: (state = {}) => {return state;}
});

export default rootReducer;
