import axios from "axios";
import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  SEARCH_JOB_SUCCESS,
  SEARCH_JOB_ERROR,
  SEARCH_JOB_LOADING,
  GET_JOBS_LOADING,
} from "../types";

// Get a list of all active jobs
export const getJobs = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await axios({
        method: "get",
        url: "https://remotive.io/api/remote-jobs",
      });

      dispatch({ type: GET_JOBS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR, payload: error });
    }
  };
};

// Search for jobs as per the user's query
export const searchJobs = (userInput) => {
  return async (dispatch) => {
    dispatch(setSearchJobsLoading());

    try {
      const response = await axios({
        method: "get",
        url: `https://remotive.io/api/remote-jobs?search=${userInput}`,
      });

      dispatch({ type: SEARCH_JOB_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_JOB_ERROR, payload: error });
    }
  };
};

// Set loading
export const setLoading = () => {
  return { type: GET_JOBS_LOADING };
};

// Set loading for jobs search
export const setSearchJobsLoading = () => {
  return { type: SEARCH_JOB_LOADING };
};
