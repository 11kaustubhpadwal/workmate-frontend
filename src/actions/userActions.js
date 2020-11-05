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
} from "../types";

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
