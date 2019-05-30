import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';


const mapStateToProps = state => {
  const id = state.session.id
  const currentUser = state.entities.users[state.session.id]
  return {
    id,
    currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
