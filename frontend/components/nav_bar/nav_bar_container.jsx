// import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchAllFollows} from "../../actions/follow_actions";
import {fetchAllUsers} from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  const id = state.session.id;
  const currentUser = state.entities.users[state.session.id];
  
  return {
    id,
    currentUser,
    loggedIn: !!currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
