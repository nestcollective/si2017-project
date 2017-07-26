import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = { user: 'tomas' };

  changeUser = () => this.setState({ user: 'dinis' });

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  changeEmail = event => this.setState({ email: event.target.value, error: null });
  changePassword = event => this.setState({ password: event.target.value, error: null });
  submit = event => this.login(this.state.email, this.state.password);

  login(email, password) {
    fetch('http://localhost:3000/users/sign_in.json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        }
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error) {
        this.setState({ error: responseJson.error });
      } else {
        // correu fixe
      }
    });
  }

  render() {
    return (
      <div>
        Email
        <input onChange={this.changeEmail} value={this.state.email} />
        Password
        <input type='password' onChange={this.changePassword} value={this.state.password} />

        <button onClick={this.submit}> login </button>

        {this.state.error}
      </div>
    );
  }
}

export default App;
