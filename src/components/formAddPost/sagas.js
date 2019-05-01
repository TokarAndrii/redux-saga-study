import { put, call, takeLatest, delay } from "redux-saga/effects";
import api from "../../utils/api";
import addPostTypes from "./addPostTypes";
import addPostActions from "./addPostActions";
import revertActions from "../revertOperation/revertActions";
import revertTypes from "../../configs/revertTypes";

function* addPost(newPostAction) {
  try {
    // this for emulate long time api fetch to show spinner
    yield delay(500);
    const { post } = newPostAction.payload;
    const { title, content } = post;
    const result = yield call(api.addPost, title, content);

    if (result.status === 201) {
      yield put(addPostActions.ADD_POST_SUCCEEDED(result.data));
      yield put(
        revertActions.SET_REVERT_OPERATHION_METHOD(
          revertTypes.DELETE_METHOD_FOR_REVERT
        )
      );
      yield put(revertActions.SHOW_REVERT());
      yield delay(3000);
      yield put(revertActions.CLOSE_REVERT());
      yield put(revertActions.SET_REVERT_OPERATHION_METHOD(null));
    }
  } catch (error) {
    yield put(addPostActions.ADD_POST_FAILED(error));
  }
}

function* addPostWatcher() {
  yield takeLatest(addPostTypes.ADD_POST_STARTED, addPost);
}

export default addPostWatcher;
