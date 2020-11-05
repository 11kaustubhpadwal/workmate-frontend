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
} from "../types";

const initialState = {
  success: null,
  error: null,
  saveJobLoading: false,
  unsaveJobLoading: false,
  getSavedJobsLoading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_JOB_LOADING: {
      return {
        ...state,
        success: null,
        saveJobLoading: true,
      };
    }
    case UNSAVE_JOB_LOADING: {
      return {
        ...state,
        success: null,
        unsaveJobLoading: true,
      };
    }
    case GET_SAVED_JOBS_LOADING: {
      return {
        ...state,
        success: null,
        getSavedJobsLoading: true,
      };
    }
    default:
      return state;
  }
};
