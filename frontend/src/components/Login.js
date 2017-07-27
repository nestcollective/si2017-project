import React, { Component } from 'react';
import login from '../utils/user/Login.js';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  changeEmail = event => this.setState({ email: event.target.value, error: null });
  changePassword = event => this.setState({ password: event.target.value, error: null });
  submit = event => {
    login(this.state.email, this.state.password, (err, res) => {
      console.log(res);
      if(err){
        this.setState({ error: err });
      }else{
        console.log("login with success");
      }
    });
  }

  render() {
    return (
      <div>
        <p>Email</p>
        <input onChange={this.changeEmail} value={this.state.email} />
        <p>Password</p>
        <input type='password' onChange={this.changePassword} value={this.state.password} />

        <button onClick={this.submit}> login </button>

        {this.state.error}
      </div>
    );
  }
}
