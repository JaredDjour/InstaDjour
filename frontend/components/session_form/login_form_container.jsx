import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form'

const msp = ( {errors} ) => {
  const clearErrors = () => {
    return errors["session"] = []; 
  };
  return {
    errors: errors.session,
    formType: 'Log In',
    navLink: <div> Don't have an account? <Link className="session-switch-link" to="/signup">Sign up</Link></div>,
    clearErrors: clearErrors()
  }
}

const mdp = dispatch => {
  return {
  processForm: user => dispatch(login(user)),
  processDemo: demoUser => dispatch(login(demoUser)),
  // receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  }
}

export default connect(msp, mdp)(SessionForm);
