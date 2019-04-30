import revertTypes from "./revertTypes";
const isShowRevertReducer = (state = false, { type, payload }) => {
  switch (type) {
    case revertTypes.SHOW_REVERT:
    case revertTypes.CLOSE_REVERT:
      return payload;
    default:
      return state;
  }
};

export default isShowRevertReducer;
