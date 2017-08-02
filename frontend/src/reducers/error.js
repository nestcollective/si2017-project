import { SET_ERROR, CLEAN_ERROR } from '../actions/types';

const initialState = {
  login: null,
  signup: null,
};

export default function (state = initialState, action) {
  if (action.type === SET_ERROR) {
    return { ...state, [action.payload.key]: action.payload.error };
  } else if (action.type === CLEAN_ERROR) {
    return { ...state, [action.payload.key]: null };
  }
  return state;
}
