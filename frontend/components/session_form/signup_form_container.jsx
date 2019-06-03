import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form'

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
    navLink: <div> Have an account? <Link className="session-switch-link" to="/login">Log in</Link></div>
  };
};

const mdp = dispatch => {
  return {
  processForm: user => dispatch(signup(user))
  };
};

export default connect(msp, mdp)(SessionForm);
