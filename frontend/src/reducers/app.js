import { SET_ERROR } from '../actions/types';

const initialState = {
  error: null,
};

export default function (state = initialState, action) {
  if (action.type === SET_ERROR) {
    return { ...state, ...action.payload };
  }

  return state;
}
