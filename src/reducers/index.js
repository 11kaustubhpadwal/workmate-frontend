import { combineReducers } from "redux";

import jobReducer from "./jobReducer";
import userReducer from "./userReducer";

export default combineReducers({ jobs: jobReducer, user: userReducer });
