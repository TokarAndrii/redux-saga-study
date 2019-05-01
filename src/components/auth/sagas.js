import { put, call, takeLatest, delay } from "redux-saga/effects";
import api from "../../utils/api";
import authActions from "./authActions";
import authTypes from "./authTypes";

function* getToken() {
  try {
    // this for emulate long time api fetch to show spinner
    yield delay(500);
    const token = yield call(api.makeRequestToken);
    yield put(authActions.AUTH_REQUEST_TOKEN_SUCCED(token));
  } catch (error) {
    yield put(authActions.AUTH_REQUEST_TOKEN_FAILED(error));
  }
}

function* tokenGetWatcher() {
  yield takeLatest(authTypes.AUTH_REQUEST_TOKEN_STARTED, getToken);
}

export default tokenGetWatcher;
