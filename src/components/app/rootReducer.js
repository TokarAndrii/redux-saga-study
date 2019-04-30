import { combineReducers } from "redux";
import rootPostsReducer from "../listPosts/rootPostsReducer";
import isLoadingReducer from "../isLoading/isLoadingReducer";
import rootErrorReducer from "../error/rootErrorReducer";
import authReducer from "../auth/authRootReducer";
import revertReducer from "../revertOperation/rootRevertOperationReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: rootPostsReducer,
  isLoading: isLoadingReducer,
  error: rootErrorReducer,
  revert: revertReducer
});

export default rootReducer;
