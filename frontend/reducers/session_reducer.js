import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";

// set nullUser to have an id of null, so that we can have the session state
// initialize with no ID unless someone is logged in:
const _nullUser Object.freeze({
  id: null,
});


const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type){
      case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id};
      case LOGOUT_CURRENT_USER:
      return _nullUser;
      default:
      return state;
    };
};

export default sessionReducer;
