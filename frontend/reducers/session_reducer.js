import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
import {merge} from 'lodash';
// set nullUser to have an id of null, so that we can have the session state
// initialize with no ID unless someone is logged in:


const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
      case RECEIVE_CURRENT_USER:
        return merge({}, state, { id: action.currentUser.id});
      case LOGOUT_CURRENT_USER:
        return {};
      default:
        return state;
    };
};

export default sessionReducer;
