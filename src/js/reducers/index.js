import { combineReducers } from 'redux';
import objReducer from './objReducer';
import arrReducer from './arrReducer';

export default combineReducers({
  obj: objReducer,
  arr: arrReducer,
});
