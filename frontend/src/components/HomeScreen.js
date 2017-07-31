import React from 'react';

const HomeScreen = ({ user, logout }) => (
  <div>
    {user.email}
    <button title='logout' onClick={logout} />
  </div>
);

export default HomeScreen;
