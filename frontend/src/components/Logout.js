import React, { Component } from 'react';
import logout from '../utils/user/Logout.js';

export default class Logout extends Component {
  state = {
    error: null,
  }

  submit = event => {
    this.setState({
      error: null,
    });
    let email = sessionStorage.getItem('email');
    let authenticationToken = sessionStorage.getItem('authentication_token');
    logout(email, authenticationToken, (err, res) => {
      if(err){
        this.setState({ error: err });
      }else{
        sessionStorage.setItem('id', '');
        sessionStorage.setItem('first_name', '');
        sessionStorage.setItem('last_name', '');
        sessionStorage.setItem('email', '');
        sessionStorage.setItem('authentication_token', '');
        sessionStorage.setItem('avatar', '');
        this.setState({
          error: null,
        });
        this.props.callback(); 
      }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.submit}>Sair</button>
        {this.state.error}
      </div>
    );
  }
}
