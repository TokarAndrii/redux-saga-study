import { put, call, takeLatest, select } from "redux-saga/effects";
import api from "../../utils/api";
import revertActions from "./revertActions";
import revertTypes from "./revertTypes";
import selectors from "../app/selectors";
import revertTypesMethods from "../../configs/revertTypes";

function* revertOperation() {
  const method = yield select(selectors.getRevertOperathionMethod);

  if (method === revertTypesMethods.DELETE_METHOD_FOR_REVERT) {
    try {
      const postAdded = yield select(selectors.getAddPost);
      const { id } = postAdded;
      const result = yield call(api.deletePosts, id);
      if (result.status === 204) {
        yield put(revertActions.FETCH_REVERT_SUCCEDED());
      } else if (result.status !== 204)
        yield put(revertActions.FETCH_REVERT_FAILED());

      yield put(revertActions.IS_REVERTED_TO_DEFAULT_VALUE());
    } catch (error) {
      yield put(revertActions.FETCH_REVERT_FAILED(error));
      yield put(revertActions.IS_REVERTED_TO_DEFAULT_VALUE());
    }
  }
  if (method === revertTypesMethods.CREATE_METHOD_FOR_REVERT) {
    try {
      const postDeleted = yield select(selectors.getDeletedPost);
      const { title, content } = postDeleted;
      const result = yield call(api.addPost, title, content);
      if (result.status === 201) {
        yield put(revertActions.FETCH_REVERT_SUCCEDED());
      } else if (result.status !== 201)
        yield put(revertActions.FETCH_REVERT_FAILED());

      yield put(revertActions.IS_REVERTED_TO_DEFAULT_VALUE());
    } catch (error) {
      yield put(revertActions.FETCH_REVERT_FAILED(error));
      yield put(revertActions.IS_REVERTED_TO_DEFAULT_VALUE());
    }
  }
}

function* revertWatcher() {
  yield takeLatest(revertTypes.FETCH_REVERT_STARTED, revertOperation);
}

export default revertWatcher;
