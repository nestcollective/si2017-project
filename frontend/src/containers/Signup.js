import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupScreen from '../components/SignupScreen';
import { signup } from '../actions/user';
import { setError, cleanError } from '../actions/error';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
  };

  changeStateKey = (key, value) => {
    this.setState({ [key]: value });
    this.props.cleanError('signup');
  }

  changeNewsletter = () => this.setState(prevState => ({ newsletter: !prevState.newsletter }));

  signup = () => {
    const { password, confirmPassword, firstName, lastName, email, newsletter } = this.state;

    if (password !== confirmPassword) {
      this.props.setError({ confirm_password: 'Palavras-passe não correspondem.' }, 'signup');
      return;
    }

    this.props.signup(firstName, lastName, email, password, newsletter);
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, newsletter } = this.state;
    const { changeNewsletter, signup } = this;
    const { error } = this.props;

    return (
      <SignupScreen
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        newsletter={newsletter}
        error={error}
        changeStateKey={this.changeStateKey}
        changeNewsletter={changeNewsletter}
        submit={signup}
      />
    );
  }
}

Signup.propTypes = {
  error: PropTypes.shape({
    geral: PropTypes.string,
    first_name: PropTypes.arrayOf(PropTypes.string),
    last_name: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
    password: PropTypes.arrayOf(PropTypes.string),
    confirmPassword: PropTypes.string,
  }),
  setError: PropTypes.func.isRequired,
  cleanError: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
};

const propsSignup = state => ({ error: state.error.signup });

export default connect(propsSignup, { signup, setError, cleanError })(Signup);
