import { combineReducers } from "redux";
import cats from "./cat/catReducer";
import dogs from "./dog/dogReducer";
import apiCallsInProgress from "./apiStatusReducer";


const rootReducer = combineReducers({
  cats,
  dogs,
  apiCallsInProgress,
});

export default rootReducer;