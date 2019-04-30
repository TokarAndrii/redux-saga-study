import revertTypes from "./revertTypes";
const operationMethodReducer = (state = null, { type, payload }) => {
  switch (type) {
    case revertTypes.SET_REVERT_OPERATHION_METHOD:
      return payload.method;
    default:
      return state;
  }
};

export default operationMethodReducer;
