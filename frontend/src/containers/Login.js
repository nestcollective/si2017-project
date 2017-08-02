import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginScreen from '../components/LoginScreen';
import { login } from '../actions/user';
import { cleanError } from '../actions/error';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
    this.props.cleanError('login');
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
    this.props.cleanError('login');
  };

  login = () => this.props.login(this.state.email, this.state.password);

  render() {
    const { email, password } = this.state;
    const { changeEmail, changePassword, login } = this;
    const { error } = this.props;

    return (
      <LoginScreen
        email={email}
        password={password}
        error={error}
        changeEmail={changeEmail}
        changePassword={changePassword}
        submit={login}
      />
    );
  }
}

Login.propTypes = {
  error: PropTypes.string,
  cleanError: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(({ error }) => ({ error: error.login }), { login, cleanError })(Login);
