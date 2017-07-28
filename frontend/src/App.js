import React, { Component } from 'react';
//import logo from './logo.svg';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import './App.css';

class App extends Component {
  state = {
    id: sessionStorage.getItem('id'),
    firstName: sessionStorage.getItem('first_name'),
    lastName: sessionStorage.getItem('last_name'),
    email: sessionStorage.getItem('email'),
    authenticationToken: sessionStorage.getItem('authentication_token'),
    avatar: sessionStorage.getItem('avatar'),
  }

  login = (id, firstName, lastName, email, authenticationToken, avatar) => {
    this.setState({
      id,
      firstName,
      lastName,
      email,
      authenticationToken,
      avatar,
    });
  }

  logout = () => {
    this.setState({
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      authenticationToken: '',
      avatar: '',
    })
  }

  render() {
    return (
      <div className="App">
        {(() => {
          if(this.state.authenticationToken === '' && this.state.email === ''){
            return(
              <div>
                <Login callback={this.login} />
                <Signup />
              </div>
            )
          }else{
            return(
              <div>
                <Logout callback={this.logout} />
              </div>
            )
          }
        })()}
      </div>
    );
  }
}

export default App;
