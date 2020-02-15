import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({});

const middleware = [thunk, logger];

const enhancements = [applyMiddleware(...middleware)];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(rootReducer, {}, compose(...enhancements));
