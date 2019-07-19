// import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchAllFollows} from "../../actions/follow_actions";
import {fetchAllUsers} from "../../actions/user_actions";
import {fetchAllPosts, fetchPost} from "../../actions/post_actions";
import {fetchAllComments} from "../../actions/comment_actions";
import {fetchAllLikes} from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => { 

  const id = state.session.id;
  const currentUser = state.entities.users[state.session.id];
  const username = state.entities.users[state.session.id].username;
  
  return {
    post: state.entities.posts[ownProps.match.params.postId],

    id,
    currentUser,
    username,
    loggedIn: !!currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  // openModal: modal => dispatch(openModal(modal)),
  // closeModal: () => dispatch(closeModal()),
  fetchAllComments: () => dispatch(fetchAllComments()),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  // deletePost: id => dispatch(deletePost(id)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  fetchPost: (id) => dispatch(fetchPost(id)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
