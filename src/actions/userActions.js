import axios from "axios";
import {
  SAVE_JOB_ERROR,
  SAVE_JOB_LOADING,
  SAVE_JOB_SUCCESS,
  UNSAVE_JOB_ERROR,
  UNSAVE_JOB_LOADING,
  UNSAVE_JOB_SUCCESS,
  GET_SAVED_JOBS_ERROR,
  GET_SAVED_JOBS_LOADING,
  GET_SAVED_JOBS_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
} from "../types";

// Get a list of all saved jobs
export const getSavedJobs = (email) => {
  return async (dispatch) => {
    dispatch(setLoadingGetSavedJobs());

    try {
      const response = await axios({
        method: "get",
        url: "https://workmate-api.herokuapp.com/api/user",
        data: { email },
      });

      dispatch({ type: GET_SAVED_JOBS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_SAVED_JOBS_ERROR, payload: error.response.data });
    }
  };
};

// Register user
export const registerUser = (email) => {
  return async (dispatch) => {
    dispatch(setLoadingRegisterUser());

    try {
      const response = await axios({
        method: "post",
        url: "https://workmate-api.herokuapp.com/api/user",
        data: { email },
      });

      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR, payload: error.response.data });
    }
  };
};

// Save job
export const saveJob = (data, setJobID, errorMsg, successMsg) => {
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

      setJobID(0);

      successMsg();
    } catch (error) {
      dispatch({ type: SAVE_JOB_ERROR, payload: error.response.data });

      setJobID(0);

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

// Set loading for getting a list of all saved jobs
export const setLoadingGetSavedJobs = () => {
  return { type: GET_SAVED_JOBS_LOADING };
};

// Set loading for registering a user
export const setLoadingRegisterUser = () => {
  return { type: REGISTER_USER_LOADING };
};
