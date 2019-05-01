import revertTypes from "./revertTypes";

const SHOW_REVERT = () => ({
  type: revertTypes.SHOW_REVERT,
  payload: true
});

const CLOSE_REVERT = () => ({
  type: revertTypes.CLOSE_REVERT,
  payload: false
});

const TOGGLE_REVERT = status => ({
  type: revertTypes.CLOSE_REVERT,
  payload: { status }
});

const SET_REVERT_OPERATHION_METHOD = method => ({
  type: revertTypes.SET_REVERT_OPERATHION_METHOD,
  payload: { method }
});

const FETCH_REVERT_STARTED = () => ({
  type: revertTypes.FETCH_REVERT_STARTED
});

const FETCH_REVERT_SUCCEDED = () => ({
  type: revertTypes.FETCH_REVERT_SUCCEDED
});

const FETCH_REVERT_FAILED = error => ({
  type: revertTypes.FETCH_REVERT_FAILED,
  payload: { error }
});

const IS_REVERTED_TO_DEFAULT_VALUE = () => ({
  type: revertTypes.IS_REVERTED_TO_DEFAULT_VALUE
});

export default {
  SHOW_REVERT,
  CLOSE_REVERT,
  TOGGLE_REVERT,
  SET_REVERT_OPERATHION_METHOD,
  FETCH_REVERT_STARTED,
  FETCH_REVERT_SUCCEDED,
  FETCH_REVERT_FAILED,
  IS_REVERTED_TO_DEFAULT_VALUE
};
