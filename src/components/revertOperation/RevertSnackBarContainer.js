import { connect } from "react-redux";
import revertActions from "./revertActions";

import RevertSnack from "./RevertSnackBar";

const MDTp = {
  handleRevert: revertActions.FETCH_REVERT_STARTED
};

export default connect(
  null,
  MDTp
)(RevertSnack);
