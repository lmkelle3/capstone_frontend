import axios from "axios";
import * as types from "./constants";

export const getAllMessages = () => {
  return dispatch => {
    axios
      .get("http://localhost:8080/messages")
      .then(res => {
        dispatch({
          type: types.GET_MESSAGES_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_MESSAGES_FAILED,
          payload: err
        });
      });
  };
};
export const getOneMessage = id => {
  return dispatch => {
    axios
      .get(`http://localhost:8080/messages/${id}`)
      .then(res => {
        dispatch({
          type: types.GET_ONE_MESSAGE_SUCCESS,
          payload: res.data
        });
        console.log("payload", res.data);
      })
      .catch(err => {
        dispatch({
          type: types.GET_ONE_MESSAGE_FAILED,
          payload: err
        });
      });
  };
};
export const addMessage = message => {
  return dispatch => {
    axios
      .post(`http://localhost:8080/messages`, message)
      .then(res => {
        dispatch({
          type: types.ADD_MESSAGE_SUCCESS,
          payload: res.data
        });
        console.log("Payload", res.data);
      })
      .catch(err => {
        dispatch({
          type: types.ADD_MESSAGE_FAILED,
          payload: err
        });
      });
  };
};

export const deleteMessage = id => async dispatch => {
  dispatch({
    type: types.DELETE_MESSAGE_PENDING
  });
  try {
    let response = await axios.delete(`http://localhost:8080/messages/${id}`);
    dispatch({
      type: types.DELETE_MESSAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.DELETE_MESSAGE_FAILED,
      payload: err
    });
  }
};

export const editMessage = (id, message) => async dispatch => {
  dispatch({
    type: types.EDIT_MESSAGE_PENDING
  });
  try {
    let response = await axios.patch(
      `http://localhost:8080/messages/${id}`,
      message
    );
    dispatch({
      type: types.EDIT_MESSAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_MESSAGE_FAILED,
      payload: err
    });
  }
};
