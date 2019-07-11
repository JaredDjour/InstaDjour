import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form'

const msp = ( {errors} ) => {

  const clearErrors = () => {
    return errors.session = [];
  }

  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <div> Have an account? <Link className="session-switch-link" to="/login">Log in</Link></div>,
    clearErrors: clearErrors(),
  }
};

const mdp = dispatch => {
  return {
  processForm: user => dispatch(signup(user)),
  processDemo: demoUser => dispatch(login(demoUser)),
  // receiveErrors: error => dispatch(receiveErrors(error))
  };
};

export default connect(msp, mdp)(SessionForm);
