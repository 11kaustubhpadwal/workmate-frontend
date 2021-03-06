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

const initialState = {
  success: null,
  error: null,
  saveJobLoading: false,
  unsaveJobLoading: false,
  registerUserLoading: false,
};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STATE: {
      return {
        ...state,
        success: null,
        error: null,
      };
    }
    case SAVE_JOB_LOADING: {
      return {
        ...state,
        success: null,
        saveJobLoading: true,
        error: null,
      };
    }
    case SAVE_JOB_SUCCESS: {
      return {
        ...state,
        success: action.payload,
        saveJobLoading: false,
        error: null,
      };
    }
    case SAVE_JOB_ERROR: {
      return {
        ...state,
        error: action.payload,
        saveJobLoading: false,
        success: null,
      };
    }
    case UNSAVE_JOB_LOADING: {
      return {
        ...state,
        success: null,
        unsaveJobLoading: true,
        error: null,
      };
    }
    case UNSAVE_JOB_SUCCESS: {
      return {
        ...state,
        success: action.payload,
        unsaveJobLoading: false,
        error: null,
      };
    }
    case UNSAVE_JOB_ERROR: {
      return {
        ...state,
        error: action.payload,
        unsaveJobLoading: false,
        success: null,
      };
    }
    case REGISTER_USER_LOADING: {
      return {
        ...state,
        success: null,
        registerUserLoading: true,
        error: null,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload,
        registerUserLoading: false,
        error: null,
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        error: action.payload,
        registerUserLoading: false,
        success: null,
      };
    }
    default:
      return state;
  }
};
