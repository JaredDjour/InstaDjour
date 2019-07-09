import * as APIUtil from "../util/session_api_util.js";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  error => dispatch(receiveErrors(error.responseJSON)));
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(()=> dispatch(logoutCurrentUser()),
  error => dispatch(receiveErrors(error.responseJSON)));
};

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  error => {
    return(
   dispatch(receiveErrors(error.responseJSON)));});
};



const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

 // errors will be an array:
const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
