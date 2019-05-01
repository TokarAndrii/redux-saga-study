import postsTypes from "./types";

const selectedPostsListreducer = (state = [], { type, payload }) => {
  switch (type) {
    case postsTypes.SET_POST_TO_SELECTED_LIST:
    case postsTypes.DESELECT_POST_FROM_SELECTED_LIST:
      return payload.selectedList;
    case postsTypes.SET_SELECTED_LIST_TO_EMPTY:
      return payload;
    default:
      return state;
  }
};

export default selectedPostsListreducer;
