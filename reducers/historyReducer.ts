/* eslint-disable prettier/prettier */
// src/reducers/historyReducer.ts
import {AnyAction} from 'redux';

interface DataState {
  data: [];
}

const initialState: DataState = {
  data: [],
};

const historyReducer = (state = initialState, action: AnyAction): DataState => {
  switch (action.type) {
    case 'SET_HISTORY':
      return {...state, data: action.payload};

    default:
      return state;
  }
};

export default historyReducer;
