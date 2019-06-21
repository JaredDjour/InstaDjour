import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
// import modalReducer from './modal_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  // modals: modalReducer,
});

export default entitiesReducer;
