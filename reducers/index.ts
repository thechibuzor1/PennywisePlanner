/* eslint-disable prettier/prettier */
// src/reducers/index.ts
import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import historyReducer from './historyReducer';
import themeReducer from './ThemeReducers';
import userReducer from './userReducers';

let reducers = combineReducers({
  dataReducers: dataReducer,
  historyReducer: historyReducer,
  themeReducer: themeReducer,
  userReducer: userReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
