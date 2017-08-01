import React from 'react';
import TextInput from './TextInput'

const SignupScreen = ({ changeStateKey, firstName, lastName, email, password, confirmPassword, changeNewsletter, newsletter, submit, error }) => (
  <div>
    <TextInput
      text='Nome'
      error={error && error.first_name && error.first_name.join(' ')}
      changeHandler={changeStateKey}
      stateKey='firstName'
      value={firstName}
    />
    <TextInput
      text='Apelido'
      error={error &&  error.last_name && error.last_name.join(' ')}
      changeHandler={changeStateKey}
      stateKey='lastName'
      value={lastName}
    />
    <TextInput
      text='Email'
      error={error && error.email && error.email.join(' ')}
      changeHandler={changeStateKey}
      stateKey='email'
      value={email}
    />
    <TextInput
      text='Palavra-passe'
      type={'password'}
      error={error && error.password && error.password.join(' ')}
      changeHandler={changeStateKey}
      stateKey='password'
      value={password}
    />
    <TextInput
      text='Confirmar palavra-passe'
      type={'password'}
      error={error && error.confirm_password && error.confirm_password.join(' ')}
      changeHandler={changeStateKey}
      stateKey='confirmPassword'
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
