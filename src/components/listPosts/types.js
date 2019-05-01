// fetch list post
const FETCH_LIST_POSTS_SUCCEEDED = "[list-posts]/FETCH_LIST_POSTS_SUCCEEDED";
const FETCH_LIST_POSTS_STARTED = "[list-posts]/FETCH_LIST_POSTS_STARTED";
const FETCH_LIST_POSTS_FAILED = "[list-posts]/FETCH_LIST_POSTS_FAILED";

// fetch list post
const FETCH_LIST_POSTS_DELETE_SUCCEEDED =
  "[list-posts]/FETCH_LIST_POSTS_DELETE_SUCCEEDED";
const FETCH_LIST_POSTS_DELETE_STARTED =
  "[list-posts]/FETCH_LIST_POSTS_DELETE_STARTED";
const FETCH_LIST_POSTS_DELETE_FAILED =
  "[list-posts]/FETCH_LIST_POSTS_DELETE_FAILED";

const SET_POST_TO_SELECTED_LIST = "[list-posts]/SET_POST_TO_SELECTED_LIST";
const SET_SELECTED_LIST_TO_EMPTY = "[list-posts]/SET_SELECTED_LIST_TO_EMPTY";

const DESELECT_POST_FROM_SELECTED_LIST =
  "[list-posts]/DESELECT_POST_FROM_SELECTED_LIST";

export default {
  FETCH_LIST_POSTS_SUCCEEDED,
  FETCH_LIST_POSTS_FAILED,
  FETCH_LIST_POSTS_STARTED,
  SET_POST_TO_SELECTED_LIST,
  DESELECT_POST_FROM_SELECTED_LIST,
  FETCH_LIST_POSTS_DELETE_STARTED,
  FETCH_LIST_POSTS_DELETE_SUCCEEDED,
  FETCH_LIST_POSTS_DELETE_FAILED,
  SET_SELECTED_LIST_TO_EMPTY
};
