import axios from "axios";
import * as types from "./constants";

export const getAllClaims = () => {
  return dispatch => {
    axios
      .get("http://localhost:8080/claims")
      .then(res => {
        dispatch({
          type: types.GET_CLAIMS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_CLAIMS_FAILED,
          payload: err
        });
      });
  };
};
export const getOneClaim = id => {
  return dispatch => {
    axios
      .get(`http://localhost:8080/claims/${id}`)
      .then(res => {
        dispatch({
          type: types.GET_ONE_CLAIM_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_ONE_CLAIM_FAILED,
          payload: err
        });
      });
  };
};
export const addClaim = claim => {
  return dispatch => {
    axios
      .post(`http://localhost:8080/claims`, claim)
      .then(res => {
        dispatch({
          type: types.ADD_CLAIM_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.ADD_CLAIM_FAILED,
          payload: err
        });
      });
  };
};

export const deleteClaim = id => async dispatch => {
  dispatch({
    type: types.DELETE_CLAIM_PENDING
  });
  try {
    let response = await axios.delete(`http://localhost:8080/claims/${id}`);
    dispatch({
      type: types.DELETE_CLAIM_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.DELETE_CLAIM_FAILED,
      payload: err
    });
  }
};

export const editClaim = (id, claim) => async dispatch => {
  dispatch({
    type: types.EDIT_CLAIM_PENDING
  });
  try {
    let response = await axios.patch(
      `http://localhost:8080/claims/${id}`,
      claim
    );
    dispatch({
      type: types.EDIT_CLAIM_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_CLAIM_FAILED,
      payload: err
    });
  }
};
