import revertTypes from "./revertTypes";

const isRevertedReducer = (state = null, { type }) => {
  switch (type) {
    case revertTypes.FETCH_REVERT_FAILED:
      return false;
    case revertTypes.FETCH_REVERT_SUCCEDED:
      return true;
    case revertTypes.IS_REVERTED_TO_DEFAULT_VALUE:
      return null;
    default:
      return state;
  }
};

export default isRevertedReducer;
