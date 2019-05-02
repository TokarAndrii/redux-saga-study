import postsTypes from "../listPosts/types";
import errorTypes from "./errorTypes";
import authTypes from "../auth/authTypes";
import addPostTypes from "../formAddPost/addPostTypes";
import revertTypes from "../revertOperation/revertTypes";
import editPostTypes from '../editForm/editTypes'

const bodyErrorReducer = (state = "", { type, payload }) => {
  switch (type) {
    case postsTypes.FETCH_LIST_POSTS_FAILED:
    case authTypes.AUTH_REQUEST_TOKEN_FAILED:
    case addPostTypes.ADD_POST_FAILED:
    case postsTypes.FETCH_LIST_POSTS_DELETE_FAILED:
    case revertTypes.FETCH_REVERT_FAILED:
    case editPostTypes.FETCH_EDIT_POST_FAILED:
      return payload.error;
    case errorTypes.SET_ERROR_IS_CLOSED:
      return "";
    default:
      return state;
  }
};

export default bodyErrorReducer;
