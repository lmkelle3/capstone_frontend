import * as types from "./constants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CLAIMS_SUCCESS:
      return action.payload;
    case types.GET_CLAIMS_FAILED:
      return action.payload;
    case types.GET_ONE_CLAIM_SUCCESS:
      console.log("AP", action.payload);
      return action.payload;
    case types.GET_ONE_CLAIM_FAILED:
      return action.payload;
    case types.ADD_CLAIM_SUCCESS:
      return [...state, action.payload];
    case types.ADD_CLAIM_FAILED:
      return action.payload;
    case types.DELETE_CLAIM_PENDING:
      return state;
    case types.DELETE_CLAIM_SUCCESS:
      console.log("delete AP", action.payload);
      return state.filter(claim => claim.id !== action.payload);
    case types.DELETE_CLAIM_FAILED:
      return action.payload;
    case types.EDIT_CLAIM_PENDING:
      return state;
    case types.EDIT_CLAIM_SUCCESS:
      return state.map(claim =>
        claim.id === action.payload.id ? action.payload : claim
      );
    case types.EDIT_CLAIM_FAILED:
      return action.payload;
    default:
      return state;
  }
};
