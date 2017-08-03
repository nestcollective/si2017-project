import React from 'react';
import PropTypes from 'prop-types';

const RecoverPasswordScreen = ({ changeEmail, email, submit, error }) => (
  <div>
    <label>
      Email:
      <input
        onChange={changeEmail}
        value={email}
      />
    </label>

    <button onClick={submit}>Recuperar</button>

    {error}
  </div>
);

RecoverPasswordScreen.propTypes = {
  changeEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default RecoverPasswordScreen;
