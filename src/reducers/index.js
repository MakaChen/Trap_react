import { combineReducers } from 'redux';
import user from './user';
import reserve from './reserve';
import room from './room';

export default combineReducers({
  user,
  reserve,
  room
})