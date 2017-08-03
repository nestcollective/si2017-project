import { push } from 'react-router-redux';
import { LOGIN, LOGOUT } from './types';
import { requestPost, requestPatch } from '../utils/api-handler';
import { setError } from './error';

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
      },
    }).then((response) => {
      if (response.body.error != null) {
        dispatch(setError(response.body.error, 'login'));
      } else {
        dispatch(loginSuccess(response.body));
        dispatch(push('/'));
      }
    }).catch(err => dispatch(setError(err.message, 'login')));
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
      },
    }).then((response) => {
      if (response.body.error != null) {
        dispatch(setError(response.body.error, 'signup'));
      } else {
        dispatch(push('/login'));
      }
    }).catch(err => dispatch(setError({ geral: err.message }, 'signup')));
  };
}

export function recoverPassword(email) {
  return (dispatch) => {
    requestPost('users/password.json', {
      user: {
        email,
      },
    }).then((response) => {
      if (response.body.error != null) {
        dispatch(setError(response.body.error, 'recoverPassword'));
      } else {
        dispatch(setError('Email enviado com sucesso.', 'recoverPassword'));
      }
    }).catch(err => dispatch(setError(err.message, 'recoverPassword')));
  };
}

export function resetPassword(resetPasswordToken, password) {
  return (dispatch) => {
    requestPatch('users/password.json', {
      user: {
        reset_password_token: resetPasswordToken,
        password,
      },
    }).then((response) => {
      if (response.body.error != null) {
        dispatch(setError(response.body.error, 'resetPassword'));
      } else {
        dispatch(push('/login'));
      }
    }).catch(err => dispatch(setError(err.message, 'resetPassword')));
  };
}
