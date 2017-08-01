import React, { Component } from 'react';
import SignupScreen from '../components/SignupScreen';
import { signup } from '../actions/user';
import { error } from '../actions/app';
import { connect } from 'react-redux';

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
    this.props.setError(null);
  }

  changeNewsletter = event => this.setState((prevState, props) => ({ newsletter: !prevState.newsletter }));

  signup = () => {
    const { password, confirmPassword, firstName, lastName, email, newsletter } = this.state;

    if (password !== confirmPassword){
      this.props.setError({ confirm_password: 'Palavras-passe não correspondem.' });
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
    )
  }
}

export default connect(({ app }) => ({ error: app.error }), { signup, setError: error})(Signup);
