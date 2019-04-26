import { connect } from 'react-redux'
import ErrorComponent from './ErrorComponent';
import errorActions from './errorActions';


const MDTp = {
    handleClose: errorActions.SET_ERROR_IS_CLOSED
}

export default connect(null, MDTp)(ErrorComponent);