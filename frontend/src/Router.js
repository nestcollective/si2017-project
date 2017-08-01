import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';

const Router = ({ history, user }) => {
  const isLoggedIn = user !== null && user.email;

  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path="/"
          render={() => !isLoggedIn
            ? <Redirect to="/login" />
            : <Home />
          }
        />
        <Route
          initial
          exact
          path="/login"
          render={() => isLoggedIn
            ? <Redirect to="/" />
            : <Login />
          }
        />
        <Route
          initial
          exact
          path="/signup"
          render={() => isLoggedIn
            ? <Redirect to="/" />
            : <Signup />
          }
        />
      </div>
    </ConnectedRouter>
  );
};

Router.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    authentication_token: PropTypes.string,
  }),
  history: PropTypes.isRequired,
};

export default connect(({ user }) => ({ user: user.user }))(Router);
