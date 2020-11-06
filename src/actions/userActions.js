import axios from "axios";
import {
  SAVE_JOB_ERROR,
  SAVE_JOB_LOADING,
  SAVE_JOB_SUCCESS,
  UNSAVE_JOB_ERROR,
  UNSAVE_JOB_LOADING,
  UNSAVE_JOB_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  CLEAR_STATE,
} from "../types";

// Register user or return existing one
export const registerUser = (email) => {
  return async (dispatch) => {
    dispatch(setLoadingRegisterUser());

    try {
      const response = await axios({
        method: "post",
        url: "https://workmate-api.herokuapp.com/api/user",
        data: { email },
      });

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: response.data.user.savedJobs,
      });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.response.data });
    }
  };
};

// Save job
export const saveJob = (data, errorMsg, successMsg) => {
  return async (dispatch) => {
    dispatch(setLoadingSaveJob());

    try {
      const response = await axios({
        method: "patch",
        url: "https://workmate-api.herokuapp.com/api/save-job",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      dispatch({ type: SAVE_JOB_SUCCESS, payload: response.data });

      dispatch(clearFeedback());

      successMsg();
    } catch (error) {
      dispatch({ type: SAVE_JOB_ERROR, payload: error.response.data });

      dispatch(clearFeedback());

      errorMsg();
    }
  };
};

// Unsave job
export const unsaveJob = (email, jobToUnsave) => {
  return async (dispatch) => {
    dispatch(setLoadingUnsaveJob());

    try {
      const response = await axios({
        method: "patch",
        url: "https://workmate-api.herokuapp.com/api/unsave-job",
        data: { email, jobToUnsave },
      });

      dispatch({ type: UNSAVE_JOB_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UNSAVE_JOB_ERROR, payload: error.response.data });
    }
  };
};

// Set loading for saving a job
export const setLoadingSaveJob = () => {
  return { type: SAVE_JOB_LOADING };
};

// Set loading for unsaving a job
export const setLoadingUnsaveJob = () => {
  return { type: UNSAVE_JOB_LOADING };
};

// Set loading for registering a user
export const setLoadingRegisterUser = () => {
  return { type: REGISTER_USER_LOADING };
};

// Clear error or success feedback
export const clearFeedback = () => {
  return { type: CLEAR_STATE };
};
