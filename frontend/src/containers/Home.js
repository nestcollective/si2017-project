import React from 'react';
import { logout } from '../actions/user';
import HomeScreen from '../components/HomeScreen';
import { connect } from 'react-redux';

const Home = ({ user, logout }) => <HomeScreen logout={logout} user={user} />;

export default connect(({ user }) => ({ user: user.user }), { logout })(Home);
