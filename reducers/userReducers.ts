/* eslint-disable prettier/prettier */
// src/reducers/dataReducer.ts
import {AnyAction} from 'redux';

interface DataState {
  name: string;
}

const initialState: DataState = {
  name: 'User',
};

const userReducer = (state = initialState, action: AnyAction): DataState => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {...state, name: action.payload};

    default:
      return state;
  }
};

export default userReducer;
