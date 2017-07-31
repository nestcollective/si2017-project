import React from 'react';

const HomeScreen = ({ user, logout }) => (
  <div>
    {user.email}
    <button title='logout' onClick={logout}>Sair</button>
  </div>
);

export default HomeScreen;
