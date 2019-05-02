import { connect } from 'react-redux';
import EditForm from './EditForm';
import selectors from '../app/selectors';
import editPostActions from './editActions'

const MSTp = state => ({
    selectedPost: selectors.getSelectedPostItem(state)
});
const MDTp = dispatch => ({
    handleEditPost: (post) => dispatch(editPostActions.FETCH_EDIT_POST_STARTED(post))
})

export default connect(MSTp, MDTp)(EditForm);