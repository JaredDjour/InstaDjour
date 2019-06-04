import React from 'react';
import {Route} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/splash_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import EditPostFormContainer from './posts/edit_post_form_container';
import PostIndexContainer from './posts/post_index_container';
import PostShowContainer from './posts/post_show_container';

const App = () => {
  return (
  <div>
      <Route exact path ="/" component={SplashContainer}/>
      {/* <AuthRoute exact path="/" component={SignupFormContainer}/> */}

      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <AuthRoute exact path="/posts/:postId/edit" component={EditPostFormContainer}/>
      <AuthRoute exact path="/posts/:postId" component={PostShowContainer}/>
      {/* <AuthRoute exact path="/" component={PostIndexContainer}/>  */}
  </div>

  );
};
export default App;
