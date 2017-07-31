import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import Login from './containers/Login';
import SignupScreen from './components/SignupScreen';
import Home from './containers/Home';

const Router = ({ history, user }) => {
  const isLoggedIn = user !== null && user.email;

  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" render={() => !isLoggedIn
            ? <Redirect to="/login"/>
            : <Home />
          }
        />
        <Route initial exact path='/login' render={() => isLoggedIn
            ? <Redirect to="/"/>
            : <Login />
          }
        />
        <Route initial exact path='/signup' render={() => isLoggedIn
            ? <Redirect to="/"/>
            : <SignupScreen />
          }
        />
      </div>
    </ConnectedRouter>
  );
}

export default connect(({ user }) => ({ user: user.user }))(Router);
