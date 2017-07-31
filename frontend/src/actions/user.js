import { LOGIN, LOGOUT } from './types';
import { requestPost } from '../utils/api-handler';
import { push } from 'react-router-redux';
import { error } from './app';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: { ...user },
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: {},
  };
}

export function login(email, password) {
  return (dispatch) => {
    requestPost('users/sign_in.json', {
      user: {
        email,
        password,
      }
    }).then((response) => {
      if (response.body.error != null) {
        dispatch(error(response.body.error))
      }
      else {
        dispatch(loginSuccess(response.body));
        dispatch(push('/'));
      }
    })
    .catch((err) => dispatch(error(err.message)));
  };
}
