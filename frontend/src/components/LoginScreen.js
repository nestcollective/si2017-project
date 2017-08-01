import React from 'react';
import PropTypes from 'prop-types';

const LoginScreen = ({
  changeEmail,
  email,
  changePassword,
  password,
  submit,
  error,
}) => (
  <div>
    <label>
      Email:
      <input
        onChange={changeEmail}
        value={email}
      />
    </label>
    <label>
      Palavra-passe:
      <input
        type="password"
        onChange={changePassword}
        value={password}
      />
    </label>

    <button onClick={submit}>Entrar</button>

    {error}
  </div>
);

LoginScreen.propTypes = {
  changeEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

export default LoginScreen;
