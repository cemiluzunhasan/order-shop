import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore, compose } from "redux";
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducer, applyMiddleware(thunk));
} else {
  store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));
}

export default store;