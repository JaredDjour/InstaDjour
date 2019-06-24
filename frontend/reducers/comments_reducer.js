import {RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from "../actions/comment_actions";
// import {RECEIVE_ALL_POSTS, RECEIVE_POST} from "../actions/post_actions";
import merge from "lodash/merge";

const commentsReducer = (state = {}, action) => {
    let oldState = Object.freeze(state);
    switch (action.type) {
        // case RECEIVE_ALL_POSTS:
        //     if (action.payload.comments === undefined) {
        //         return state;
        //     } else {
        //         return action.payload.comments;
        //     }
        // case RECEIVE_POST:
        //     return merge({}, state, action.payload.comments);
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            let newState = merge({}, oldState);
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
};

export default commentsReducer;