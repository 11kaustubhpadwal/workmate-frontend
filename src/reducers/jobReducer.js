import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  SEARCH_JOB_SUCCESS,
  SEARCH_JOB_ERROR,
  GET_JOBS_LOADING,
} from "../types";

const initialState = {
  jobs: [],
  error: null,
  getJobsLoading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_LOADING: {
      return {
        ...state,
        getJobsLoading: true,
      };
    }
    case GET_JOBS_SUCCESS: {
      return {
        ...state,
        getJobsLoading: false,
        jobs: action.payload,
      };
    }
    case GET_JOBS_ERROR: {
      return {
        ...state,
        getJobsLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
