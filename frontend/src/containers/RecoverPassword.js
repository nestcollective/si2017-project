import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecoverPasswordScreen from '../components/RecoverPasswordScreen';
import { recoverPassword } from '../actions/user';
import { setError, cleanError } from '../actions/error';

class RecoverPassword extends Component {
  state = {
    email: '',
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
    this.props.cleanError('recoverPassword');
  }

  recoverPassword = () => {
    if (this.state.email !== '') this.props.recoverPassword(this.state.email);
    else {
      this.props.setError('Email não pode estar vazio.', 'recoverPassword');
    }
  }

  render() {
    const { email } = this.state;
    const { changeEmail, recoverPassword } = this;
    const { error } = this.props;

    return (
      <RecoverPasswordScreen
        email={email}
        changeEmail={changeEmail}
        error={error}
        submit={recoverPassword}
      />
    );
  }
}

RecoverPassword.propTypes = {
  error: PropTypes.string,
  cleanError: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  recoverPassword: PropTypes.func.isRequired,
};

const propsRecoverPw = state => ({ error: state.error.recoverPassword });

export default connect(propsRecoverPw, { recoverPassword, setError, cleanError })(RecoverPassword);
