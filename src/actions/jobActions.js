import axios from "axios";
import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  SEARCH_JOB_SUCCESS,
  SEARCH_JOB_ERROR,
  GET_JOBS_LOADING,
} from "../types";

// Get a list of all active jobs
export const getJobs = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await axios({
        method: "get",
        url: "https://cors-anywhere.herokuapp.com/remotive.io/api/remote-jobs",
      });

      dispatch({ type: GET_JOBS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR, payload: error });
    }
  };
};

// Set loading
export const setLoading = () => {
  return { type: GET_JOBS_LOADING };
};
