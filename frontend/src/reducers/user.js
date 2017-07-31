import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {

  if (action.type === LOGIN) {
    return { user: { ...action.payload } };
  } else if (action.type === LOGOUT) {
    return initialState;
  }

  return state;
}
