import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>

      <Link to="/signup">Sign up</Link>
    </nav>
  );

  const specificGreeting = () => (

  )

  return currentUser ? specificGreeting() : sessionLinks();
}

export default Greeting;
