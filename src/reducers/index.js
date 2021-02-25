import cellsReducer from "./cellsReducer";
import { combineReducers } from "redux";

const combinedReducer = combineReducers({
  cells: cellsReducer,
});

export default combinedReducer;
