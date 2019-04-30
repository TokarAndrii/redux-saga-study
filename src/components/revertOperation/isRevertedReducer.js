import revertTypes from "./revertTypes";

const isRevertedReducer = (state = null, { type }) => {
  switch (type) {
    case revertTypes.FETCH_REVERT_FAILED:
      return false;
    case revertTypes.FETCH_REVERT_SUCCEDED:
      return true;
    default:
      return state;
  }
};

export default isRevertedReducer;
