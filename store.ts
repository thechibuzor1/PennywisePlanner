/* eslint-disable prettier/prettier */
// src/store.ts
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // Import the thunk middleware
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
