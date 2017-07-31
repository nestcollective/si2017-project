import React from 'react';

const LoginScreen = ({ changeEmail, email, changePassword, password, submit, error }) => (
  <div>
    <label>
      Email:
      <input
        onChange={changeEmail}
        value={email} />
    </label>
    <label>
      Password:
      <input
        type='password'
        onChange={changePassword}
        value={password} />
    </label>

    <button onClick={submit}>Entrar</button>

    {error}
  </div>
);

export default LoginScreen;
