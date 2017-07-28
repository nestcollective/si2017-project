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
    if(this.state.email !== '' && this.state.password !== ''){
      login(this.state.email, this.state.password, (err, res) => {
        if(err){
          this.setState({ error: err });
        }else if(res.body.error){
          this.setState({ error: res.body.error });
        }else{
          sessionStorage.setItem('id', res.body.id);
          sessionStorage.setItem('first_name', res.body.first_name);
          sessionStorage.setItem('last_name', res.body.last_name);
          sessionStorage.setItem('email', res.body.email);
          sessionStorage.setItem('authentication_token', res.body.authentication_token);
          sessionStorage.setItem('avatar', res.body.avatar);
          this.props.callback(
            res.body.id,
            res.body.first_name,
            res.body.last_name,
            res.body.email,
            res.body.authentication_token,
            res.body.avatar
          );
        }
      });
    }else{
      this.setState({ error: "Preencha todos os campos." });
    }
  }

  render() {
    return (
      <div>
        <label>
          Email:
          <input
            onChange={this.changeEmail}
            value={this.state.email} />
        </label>
        <label>
          Password:
          <input
            type='password'
            onChange={this.changePassword}
            value={this.state.password} />
        </label>

        <button onClick={this.submit}>Entrar</button>

        {this.state.error}
      </div>
    );
  }
}
