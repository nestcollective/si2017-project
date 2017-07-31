import { SET_ERROR } from './types';

export function error(error) {
  return {
    type: SET_ERROR,
    payload: { error },
  };
}
