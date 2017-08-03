import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResetPasswordScreen from '../components/ResetPasswordScreen';
import { resetPassword } from '../actions/user';
import { setError, cleanError } from '../actions/error';

class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
    this.props.cleanError('resetPassword');
  }

  changeConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
    this.props.cleanError('resetPassword');
  }

  resetPassword = () => {
    if (this.state.password === this.state.confirmPassword) {
      this.props.resetPassword(this.props.token, this.state.password);
    } else this.props.setError('Palavras-passe não coincidem.', 'resetPassword');
  }

  render() {
    const { password, confirmPassword } = this.state;
    const { changePassword, changeConfirmPassword, resetPassword } = this;
    const { error } = this.props;

    return (
      <ResetPasswordScreen
        password={password}
        confirmPassword={confirmPassword}
        changePassword={changePassword}
        changeConfirmPassword={changeConfirmPassword}
        error={error}
        submit={resetPassword}
      />
    );
  }
}

ResetPassword.propTypes = {
  error: PropTypes.string,
  token: PropTypes.string.isRequired,
  cleanError: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
};

const propsResetPw = state => ({ error: state.error.resetPassword });

export default connect(propsResetPw, { resetPassword, setError, cleanError })(ResetPassword);
