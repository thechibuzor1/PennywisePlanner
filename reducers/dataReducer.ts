/* eslint-disable prettier/prettier */
// src/reducers/dataReducer.ts
import {AnyAction} from 'redux';

interface DataState {
  data: [];
}

const initialState: DataState = {
  data: [],
};

const dataReducer = (state = initialState, action: AnyAction): DataState => {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, data: action.payload};

    default:
      return state;
  }
};

export default dataReducer;
