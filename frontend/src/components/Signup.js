import React, { Component } from 'react';
import signup from '../utils/user/Signup.js';

export default class Signup extends Component {
  state = {
    firstName: '',
    firstNameError: null,
    lastName: '',
    lastNameError: null,
    email: '',
    emailError: null,
    password: '',
    passwordError: null,
    confirmPassword: '',
    confirmPasswordError: null,
    newsletter: false,
    error: null,
  };

  emailRegex = /^\S+@\S+\.\S+$/;
  
  changeFirstName = event => {
    this.setState({ firstName: event.target.value, error: null, firstNameError: null });
    if(event.target.value.length < 2){
      this.setState({firstNameError: 'O Nome deve ter duas ou mais letras.'});
    }
  }
  changeLastName = event => {
    this.setState({ lastName: event.target.value, error: null, lastNameError: null });
    if(event.target.value.length < 2){
      this.setState({lastNameError: 'O Apelido deve ter duas ou mais letras.'});
    }
  }
  changeEmail = event => {
    this.setState({ email: event.target.value, error: null, emailError: null });
    if(!this.emailRegex.test(event.target.value)){
      this.setState({emailError: 'Email inválido.'});
    }
  }
  changePassword = event => {
    this.setState({ password: event.target.value, error: null, passwordError: null });
    if(event.target.value.length < 6){
      this.setState({passwordError: 'A password deve ter seis ou mais caracteres.'});
    }
  }
  changeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value, error: null, confirmPasswordError: null });
    if(event.target.value !== this.state.password){
      this.setState({confirmPasswordError: 'As passwords não coincidem.'});
    }
  }
  changeNewsletter = event => this.setState((prevState, props) => ({newsletter: !prevState.newsletter, error: null})); 

  submit = event => {
    if(this.state.firstName.length < 2){
      this.setState({firstNameError: 'O Nome deve ter duas ou mais letras.'});
      return;
    }
    if(this.state.lastName.length < 2){
      this.setState({lastNameError: 'O Apelido deve ter duas ou mais letras.'});
      return;
    }
    if(!this.emailRegex.test(this.state.email)){
      this.setState({emailError: 'Email inválido.'});
      return;
    }
    if(this.state.password.length === 0){
      this.setState({passwordError: 'A password deve ter seis ou mais caracteres.'});
      return;
    }
    if(this.state.confirmPassword.length === 0 || this.state.password !== this.state.confirmPassword){
      this.setState({confirmPasswordError: 'As passwords não coincidem.'});
      return;
    }
    signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.newsletter, (err, res) => {
      console.log(res);
      if(err){
        this.setState({ error: err });
      }else if(res.body.error){
        this.setState({ error: res.body.error });
      }else{
        //TODO
        console.log("signup with success");
      }
    });
  }

  render() {
    return (
      <div>
        <label>
          Nome:
          {this.state.firstNameError}
          <input 
            onChange={this.changeFirstName} 
            value={this.state.firstName} />
        </label>
        <label>
          Apelido:
          {this.state.lastNameError}
          <input 
            onChange={this.changeLastName}
            value={this.state.lastName} />
        </label>
        <label>
          Email:
          {this.state.emailError}
          <input 
            onChange={this.changeEmail}
            value={this.state.email} />
        </label>
        <label>
          Password:
          {this.state.passwordError}
          <input 
            type='password' 
            onChange={this.changePassword} 
            value={this.state.password} />
        </label>
        <label>
          Confirmar Password:
          {this.state.confirmPasswordError}
          <input
            type='password'
            onChange={this.changeConfirmPassword}
            value={this.state.confirmPassword} />
        </label>
        <label>
          <input 
            type="checkbox"
            checked={this.state.newsletter}
            onChange={this.changeNewsletter} />
            Subscreva a nossa newsletter.
        </label>
        <button onClick={this.submit}> Registar </button>


        {this.state.error}
      </div>
    );
  }
}
