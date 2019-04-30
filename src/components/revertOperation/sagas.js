import { put, call, takeLatest, select } from "redux-saga/effects";
import api from "../../utils/api";
import revertActions from "./revertActions";
import revertTypes from "./revertTypes";
import selectors from "../app/selectors";
import revertTypesMethods from "../../configs/revertTypes";

function* revertOperation() {
  const method = yield select(selectors.getRevertOperathionMethod);

  console.log("method at revertOperation", method);
  //   if (method === revertTypes.DELETE_METHOD_FOR_REVERT) {
  //     console.log("need to call DELETE");
  //   }
  switch (method) {
    default:
      return;
    case revertTypesMethods.DELETE_METHOD_FOR_REVERT:
      console.log("need to call DELETE");
      const postAdded = yield select(selectors.getAddPost);
      console.log("postAdded", postAdded);
      const { id } = postAdded;
      console.log("id", id);
      const result = yield call(api.deletePosts, id);
      console.log("result at function* revertOperation", result);
      console.log("result.status", result.status);
      if (result.status === 204) {
        yield put(revertActions.FETCH_REVERT_SUCCEDED());
        //return;
      }
      yield put(revertActions.FETCH_REVERT_FAILED());
  }
}

function* revertWatcher() {
  yield takeLatest(revertTypes.FETCH_REVERT_STARTED, revertOperation);
}

export default revertWatcher;
