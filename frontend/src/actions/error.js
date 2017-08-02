import { SET_ERROR, CLEAN_ERROR } from './types';

export function setError(error, key) {
  return {
    type: SET_ERROR,
    payload: {
      key,
      error,
    },
  };
}

export function cleanError(key) {
  return {
    type: CLEAN_ERROR,
    payload: { key },
  };
}
