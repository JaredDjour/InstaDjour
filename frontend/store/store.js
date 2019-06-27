import rootReducer from '../reducers/root_reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const middleWares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middleWares.push(logger);
}
export default (preloadedState) => (
  createStore(rootReducer, preloadedState, applyMiddleware(...middleWares))
);


// import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers/root_reducer';

// const configureStore = (preloadedState ={}) => {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunk, logger)
//     // applyMiddleware(thunk)
//   );
// };

// export default configureStore;
