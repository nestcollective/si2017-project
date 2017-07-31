import React from 'react';

const SignupScreen = ({ changeFirstName, firstName, changeLastName, lastName, changeEmail, email, changePassword, password, changeConfirmPassword, confirmPassword, changeNewsletter, newsletter, submit, error }) => (
  <div>
    <label>
      Nome:
      {error && error.first_name}
      <input
        onChange={changeFirstName}
        value={firstName} />
    </label>
    <label>
      Apelido:
      {error && error.last_name}
      <input
        onChange={changeLastName}
        value={lastName} />
    </label>
    <label>
      Email:
      {error && error.email}
      <input
        onChange={changeEmail}
        value={email} />
    </label>
    <label>
      Password:
      {error && error.password}
      <input
        type='password'
        onChange={changePassword}
        value={password} />
    </label>
    <label>
      Confirmar Password:
      {error && error.confirm_password}
      <input
        type='password'
        onChange={changeConfirmPassword}
        value={confirmPassword} />
    </label>
    <label>
      <input
        type="checkbox"
        checked={newsletter}
        onChange={changeNewsletter} />
        Subscreva a nossa newsletter.
    </label>

    <button onClick={submit}>Registar</button>
  </div>
);

export default SignupScreen;
