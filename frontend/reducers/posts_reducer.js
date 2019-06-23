import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import merge from "lodash/merge"; // or import {merge} from "lodash";


const postsReducer = (state = {}, action) => {
  let oldState = Object.freeze(state);
  switch (action.type) { 
    case RECEIVE_ALL_POSTS:
       return action.posts;
    case RECEIVE_POST: 
        return merge({}, oldState, {[action.post.id]: action.post});
        // return merge({}, oldState, action.post);
    case REMOVE_POST:
        let newState = merge({}, oldState);
        delete newState[action.postId];
        return newState;
    default: 
        return oldState;
  }
};

export default postsReducer;