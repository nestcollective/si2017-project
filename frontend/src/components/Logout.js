import React, { Component } from 'react';
import logout from '../utils/user/Logout.js';

export default class Logout extends Component {
  state = {
    email: sessionStorage.getItem("email"),
    token: sessionStorage.getItem("token"),
    error: null,
  }

  submit = event => {
    this.setState({
      email: sessionStorage.getItem("email"),
      token: sessionStorage.getItem("token"),
      error: null,
    });
    logout(this.state.email, this.state.token, (err, res) => {
      console.log(res);
      if(err){
        this.setState({ error: err });
      }else{
        console.log("logout with success");
        sessionStorage.setItem("email", "");
        sessionStorage.setItem("token", "");
        this.setState({
          email: sessionStorage.getItem("email"),
          token: sessionStorage.getItem("token"),
          error: null,
        });
      }
    });
  }
  render() {
    if(this.state.email){
      return (
        <div>
          <button onClick={this.submit}> Sair </button>
          {this.state.error}
        </div>
      );
    }
    return null;
  }  
}
