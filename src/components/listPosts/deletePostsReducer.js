import postTypes from "./types";

const deletePostsReducer = (state = null, { type, payload }) => {
  switch (type) {
    case postTypes.FETCH_LIST_POSTS_DELETE_FAILED:
    case postTypes.FETCH_LIST_POSTS_DELETE_STARTED:
      return false;
    case postTypes.FETCH_LIST_POSTS_DELETE_SUCCEEDED:
      return payload.deletedPost;
    default:
      return state;
  }
};

export default deletePostsReducer;
