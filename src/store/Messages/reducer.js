import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MESSAGES_SUCCESS:
      return action.payload;
    case types.GET_MESSAGES_FAILED:
      return action.payload;
    case types.GET_ONE_MESSAGE_SUCCESS:
      return action.payload[0].id;
    case types.GET_ONE_MESSAGE_FAILED:
      return action.payload;
    case types.ADD_MESSAGE_SUCCESS:
      return [...state, action.payload];
    case types.ADD_MESSAGE_FAILED:
      return action.payload;
    case types.DELETE_MESSAGE_PENDING:
      return state;
    case types.DELETE_MESSAGE_SUCCESS:
      return state.filter(message => message.id !== action.payload.id);
    case types.DELETE_MESSAGE_FAILED:
      return action.payload;
    case types.EDIT_MESSAGE_PENDING:
      return state;
    case types.EDIT_MESSAGE_SUCCESS:
      return state.map(message =>
        message.id === action.payload.id ? action.payload : message
      );
    case types.EDIT_MESSAGE_FAILED:
      return action.payload;
    default:
      return state;
  }
};
