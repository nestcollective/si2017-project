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

  changeFirstName = event => {
    this.setState({ firstName: event.target.value });
    this.props.setError(null);
  }
  changeLastName = event => {
    this.setState({ lastName: event.target.value });
    this.props.setError(null);
  }
  changeEmail = event => {
    this.setState({ email: event.target.value });
    this.props.setError(null);
  }
  changePassword = event => {
    this.setState({ password: event.target.value });
    this.props.setError(null);
  }
  changeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
    this.props.setError(null);
  }
  changeNewsletter = event => this.setState((prevState, props) => ({ newsletter: !prevState.newsletter }));

  signup = () => {
    if(this.state.password !== this.state.confirmPassword){
        this.props.setError({ confirm_password: 'Passwords do not match.' });
        return;
    }
    this.props.signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.newsletter);
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword, newsletter } = this.state;
    const { changeFirstName, changeLastName, changeEmail, changePassword, changeConfirmPassword, changeNewsletter, signup } = this;
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
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeEmail={changeEmail}
        changePassword={changePassword}
        changeConfirmPassword={changeConfirmPassword}
        changeNewsletter={changeNewsletter}
        submit={signup}
      />
    )
  }
}

export default connect(({ app }) => ({ error: app.error }), { signup, setError: error})(Signup);
