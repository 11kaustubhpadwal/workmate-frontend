import {
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  SEARCH_JOB_SUCCESS,
  SEARCH_JOB_ERROR,
  SET_LOADING,
} from "../types";

const initialState = {
  jobs: [],
  error: null,
  loading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    }
    case GET_JOBS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
