import React from 'react';
import { Link, Redirect } from 'react-router-dom';


export default ({ id, logout, currentUser }) => {
  let logoutDisplay;
  if (id){
    logoutDisplay = (
      <div>
        <p>Hello, {currentUser.username}!</p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  } else {
    <div>
      <p>Hello, {currentUser.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  };

  return (
    <header className="nav-bar">
      <h1 className="logo">InstaDjour</h1>
      <div className="nav-logout-display">
        {logoutDisplay}
      </div>
    </header>
  );
};
