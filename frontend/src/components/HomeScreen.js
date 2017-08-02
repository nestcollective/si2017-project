import React from 'react';
import PropTypes from 'prop-types';

const HomeScreen = ({ user, logout }) => (
  <div>
    {user.email}
    <button title="logout" onClick={logout}>Sair</button>
  </div>
);

HomeScreen.propTypes = {
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

export default HomeScreen;
