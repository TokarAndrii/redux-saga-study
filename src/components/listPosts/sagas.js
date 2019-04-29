import { put, call, select, takeLatest, all, delay } from "redux-saga/effects";
import api from "../../utils/api";
import listPostsActions from "./listPostsActions";
import tokenGetWatcher from "../auth/sagas";
import addPostWatcher from "../formAddPost/sagas";
import selectors from "../app/selectors";
import types from "./types";

function* deletePost() {
  try {
    // this for emulate long time api fetch to show spinner
    yield delay(500);
    const selectedPost = yield select(selectors.getSelectedPostItem);
    console.log("selectedPost at deletePost", selectedPost);
    const { id } = selectedPost;
    const result = yield call(api.deletePosts, id);
    console.log("result function* deletePost", result);
    console.log("result function* deletePost", result.status);
    if (result.status === 204)
      yield put(
        listPostsActions.FETCH_LIST_POSTS_DELETE_SUCCEEDED(selectedPost)
      );
  } catch (error) {
    console.log("Oops error: ", error);
    yield put(listPostsActions.FETCH_LIST_POSTS_DELETE_FAILED(error));
  }
}

function* getAllPosts() {
  try {
    // this for emulate long time api fetch to show spinner
    yield delay(500);
    const posts = yield call(api.makeRequestListPosts);

    console.log("posts at getAllPosts", posts);

    yield put(listPostsActions.FETCH_LIST_POSTS_SUCCEEDED(posts));
  } catch (error) {
    console.log("Oops error: ", error);
    yield put(listPostsActions.FETCH_LIST_POSTS_FAILED(error));
  }
}

function* deletePostwatcher() {
  yield takeLatest(types.FETCH_LIST_POSTS_DELETE_STARTED, deletePost);
}

function* listPostsWatcher() {
  yield takeLatest(types.FETCH_LIST_POSTS_STARTED, getAllPosts);
}

export default function* rootSaga() {
  yield all([
    listPostsWatcher(),
    tokenGetWatcher(),
    addPostWatcher(),
    deletePostwatcher()
  ]);
}
