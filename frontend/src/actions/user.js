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

export function signup(firstName, lastName, email, password, newsletter) {
  return (dispatch) => {
    requestPost('users.json', {
      user: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        newsletter,
      }
    }).then((response) => {
      if (response.body.error != null) {
        dispatch(error(response.body.error))
      }
      else {
        dispatch(push('/login'));
      }
    })
    .catch((err) => dispatch(error(err.message)));
  };
}
