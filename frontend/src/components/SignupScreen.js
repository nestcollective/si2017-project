import React from 'react';
import TextInput from './TextInput'

const SignupScreen = ({ changeFirstName, firstName, changeLastName, lastName, changeEmail, email, changePassword, password, changeConfirmPassword, confirmPassword, changeNewsletter, newsletter, submit, error }) => (
  <div>
    <TextInput
      text='Nome'
      error={error && error.first_name}
      changeHandler={changeFirstName}
      value={firstName} 
    />
    <TextInput
      text='Apelido'
      error={error && error.last_name}
      changeHandler={changeLastName}
      value={lastName} 
    />
    <TextInput
      text='Email'
      error={error && error.email}
      changeHandler={changeEmail}
      value={email} 
    />
    <TextInput
      text='Palavra-passe'
      type={'password'} 
      error={error && error.password}
      changeHandler={changePassword}
      value={password} 
    />
    <TextInput
      text='Confirmar palavra-passe'
      type={'password'} 
      error={error && error.confirm_password}
      changeHandler={changeConfirmPassword}
      value={confirmPassword} 
    />
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
