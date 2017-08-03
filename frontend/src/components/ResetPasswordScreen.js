import React from 'react';
import PropTypes from 'prop-types';

const ResetPasswordScreen = ({
  changePassword,
  password,
  changeConfirmPassword,
  confirmPassword,
  submit,
  error,
}) => (
  <div>
    <label>
      Palavra-passe:
      <input
        type="password"
        onChange={changePassword}
        value={password}
      />
    </label>
    <label>
      Confirmar palavra-passe:
      <input
        type="password"
        onChange={changeConfirmPassword}
        value={confirmPassword}
      />
    </label>

    <button onClick={submit}>Alterar</button>

    {error}
  </div>
);


ResetPasswordScreen.propTypes = {
  changePassword: PropTypes.func.isRequired,
  changeConfirmPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default ResetPasswordScreen;
