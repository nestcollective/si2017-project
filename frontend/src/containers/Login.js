import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginScreen from '../components/LoginScreen';
import { login } from '../actions/user';
import { error } from '../actions/app';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
    this.props.setError(null);
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
    this.props.setError(null);
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
  setError: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(({ app }) => ({ error: app.error }), { login, setError: error })(Login);
