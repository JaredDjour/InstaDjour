import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
import {merge} from 'lodash';


const sessionReducer = (state = {}, action) => {

    Object.freeze(state);
    switch(action.type){
      case RECEIVE_CURRENT_USER:
        return merge({}, state, { id: action.currentUser.id});
      case LOGOUT_CURRENT_USER:
        return { id: null};
      default:
        return state;
    };
};

export default sessionReducer;
