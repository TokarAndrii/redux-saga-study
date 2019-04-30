import { combineReducers } from "redux";
import operationMethodReducer from "./operationMethodReducer";
import isShowRevertReducer from "./isShowRevertReducer";
import isRevertedReducer from "./isRevertedReducer";

const rootRevertOperationReducer = combineReducers({
  operationMethod: operationMethodReducer,
  isShowRevert: isShowRevertReducer,
  isReverted: isRevertedReducer
});

export default rootRevertOperationReducer;
