import React, { Component } from 'react';
//import logo from './logo.svg';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Signup />
        <Logout />
      </div>
    );
  }
}

export default App;
