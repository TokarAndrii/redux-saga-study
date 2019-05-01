import { put, call, select, takeLatest, all, delay } from "redux-saga/effects";
import api from "../../utils/api";
import listPostsActions from "./listPostsActions";
import tokenGetWatcher from "../auth/sagas";
import addPostWatcher from "../formAddPost/sagas";
import revertWatcher from "../revertOperation/sagas";
import selectors from "../app/selectors";
import types from "./types";
import revertActions from "../revertOperation/revertActions";
import revertTypes from "../../configs/revertTypes";

//const METHOD_FOR_REVERT = "CREATE";

function* deletePost() {
  try {
    // this for emulate long time api fetch to show spinner
    yield delay(500);
    const selectedPost = yield select(selectors.getSelectedPostItem);
    const { id } = selectedPost;
    const result = yield call(api.deletePosts, id);
    if (result.status === 204)
      yield put(
        listPostsActions.FETCH_LIST_POSTS_DELETE_SUCCEEDED(selectedPost)
      );
    yield put(
      revertActions.SET_REVERT_OPERATHION_METHOD(
        revertTypes.CREATE_METHOD_FOR_REVERT
      )
    );
    yield put(revertActions.SHOW_REVERT());
    yield delay(3000);
    yield put(revertActions.CLOSE_REVERT());
    yield put(revertActions.SET_REVERT_OPERATHION_METHOD(null));
    yield put(listPostsActions.SET_SELECTED_LIST_TO_EMPTY());
  } catch (error) {
    yield put(listPostsActions.FETCH_LIST_POSTS_DELETE_FAILED(error));
    yield put(listPostsActions.SET_SELECTED_LIST_TO_EMPTY());
  }
}

function* getAllPosts() {
  try {
    // this for emulate long time api fetch to show spinner
    yield delay(500);
    const posts = yield call(api.makeRequestListPosts);
    yield put(listPostsActions.FETCH_LIST_POSTS_SUCCEEDED(posts));
  } catch (error) {
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
    deletePostwatcher(),
    revertWatcher()
  ]);
}
