import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, logout, currentUser }) => {
  let display;
  if (id){
    display = (
      <div>
        <p>Hello, {currentUser.username}!</p>
        <button onClick={logout}>Logout</button>
      </div>
    )
  };


  return (
    <header className="nav-bar">
      <h1 className="logo">InstaDjour</h1>
      <div className="nav-display">
        {display}
      </div>
    </header>
  );
};
