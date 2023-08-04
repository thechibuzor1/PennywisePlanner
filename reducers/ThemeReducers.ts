/* eslint-disable prettier/prettier */

import {AnyAction} from 'redux';

interface DataState {
  data: {
    background: string;
    textColor: string;
    themeColor: string;
    componentTxtColor: string;
    subTextColor: string;
  };
}

const initialState: DataState = {
  data: {
    background: '#fcf4e7',
    textColor: '#1D1D1F',
    themeColor: '#1947E5',
    componentTxtColor: '#F5F5F7',
    subTextColor: '#1947E5',
  },
};

const themeReducer = (state = initialState, action: AnyAction): DataState => {
  switch (action.type) {
    case 'SET_THEME':
      return {...state, data: action.payload};

    default:
      return state;
  }
};

export default themeReducer;
