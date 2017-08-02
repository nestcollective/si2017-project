import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/user';
import HomeScreen from '../components/HomeScreen';

const Home = ({ user, logout }) => <HomeScreen logout={logout} user={user} />;

Home.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    authentication_token: PropTypes.string,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(({ user }) => ({ user: user.user }), { logout })(Home);
