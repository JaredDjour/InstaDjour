import React from 'react';
import {Route} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
  return (
  <div>
      <Route path ="/" component={NavBarContainer}/>
      <AuthRoute exact path="/" component={SignupFormContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
  </div>
  );
};
export default App;
