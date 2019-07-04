/**
 * reducers/index.js
 *
 * @format
 * @flow
 */

import { combineReducers } from 'redux';
import user from './user';
import shoe from './shoe';

export default combineReducers({
  user,
  shoe
});
