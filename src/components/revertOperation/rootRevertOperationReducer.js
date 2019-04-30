import { combineReducers } from "redux";
import operationMethodReducer from "./operationMethodReducer";
import isShowRevertReducer from "./isShowRevertReducer";

const rootRevertOperationReducer = combineReducers({
  operationMethod: operationMethodReducer,
  isShowRevert: isShowRevertReducer
});

export default rootRevertOperationReducer;
