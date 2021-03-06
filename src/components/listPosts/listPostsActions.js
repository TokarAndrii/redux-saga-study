import types from "./types";

const FETCH_LIST_POSTS_SUCCEEDED = listPosts => ({
  type: types.FETCH_LIST_POSTS_SUCCEEDED,
  payload: { listPosts }
});

const FETCH_LIST_POSTS_FAILED = error => ({
  type: types.FETCH_LIST_POSTS_FAILED,
  payload: { error }
});

const FETCH_LIST_POSTS_STARTED = () => ({
  type: types.FETCH_LIST_POSTS_STARTED
});

const SET_POST_TO_SELECTED_LIST = selectedList => ({
  type: types.SET_POST_TO_SELECTED_LIST,
  payload: { selectedList }
});

const SET_SELECTED_LIST_TO_EMPTY = () => ({
  type: types.SET_SELECTED_LIST_TO_EMPTY,
  payload: []
});
const FETCH_LIST_POSTS_DELETE_SUCCEEDED = deletedPost => ({
  type: types.FETCH_LIST_POSTS_DELETE_SUCCEEDED,
  payload: { deletedPost }
});

const FETCH_LIST_POSTS_DELETE_STARTED = () => ({
  type: types.FETCH_LIST_POSTS_DELETE_STARTED
});

const FETCH_LIST_POSTS_DELETE_FAILED = error => ({
  type: types.FETCH_LIST_POSTS_DELETE_FAILED,
  payload: { error }
});

export default {
  FETCH_LIST_POSTS_SUCCEEDED,
  FETCH_LIST_POSTS_FAILED,
  FETCH_LIST_POSTS_STARTED,
  SET_POST_TO_SELECTED_LIST,
  FETCH_LIST_POSTS_DELETE_STARTED,
  FETCH_LIST_POSTS_DELETE_SUCCEEDED,
  FETCH_LIST_POSTS_DELETE_FAILED,
  SET_SELECTED_LIST_TO_EMPTY
};
