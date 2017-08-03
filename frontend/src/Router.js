import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';
import RecoverPassword from './containers/RecoverPassword';
import ResetPassword from './containers/ResetPassword';

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
        <Route
          initial
          exact
          path="/recoverpassword"
          render={() => isLoggedIn
            ? <Redirect to="/" />
            : <RecoverPassword />
          }
        />
        <Route
          initial
          exact
          path="/recoverpassword/:token"
          render={props => isLoggedIn
            ? <Redirect to="/" />
            : <ResetPassword token={props.match.params.token} />
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
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string,
    }),
  }),
};

export default connect(({ user }) => ({ user: user.user }))(Router);
