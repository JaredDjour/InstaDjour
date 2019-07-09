import React from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/splash_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import EditPostFormContainer from './posts/edit_post_form_container';
import ProfileContainer from './profile/profile_container';
import PostShowContainer from './posts/post_show_container';
import Modal from './modal/modal';


const App = () => {
  return (
  <div>
      <Modal />
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/" component={SplashContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/posts/:postId/edit" component={EditPostFormContainer}/>
      <ProtectedRoute path="/posts/:postId" component={PostShowContainer}/>
      <ProtectedRoute path="/users/:user_id/posts" component={ProfileContainer}/> 
    </Switch>
  </div>

  );
};
export default App;
