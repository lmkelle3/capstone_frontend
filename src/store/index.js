import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import claimsReducer from "../store/Claims/reducer";
import messagesReducer from "../store/Messages/reducer";

const rootReducer = combineReducers({
  claims: claimsReducer,
  messages: messagesReducer
});

const middleware = [thunk, logger];

const enhancements = [applyMiddleware(...middleware)];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancements.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(rootReducer, {}, compose(...enhancements));
