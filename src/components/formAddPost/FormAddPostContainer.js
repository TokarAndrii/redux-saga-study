import { connect } from 'react-redux';
import FormAddPost from './FormAddPost';
import addPostActions from './addPostActions';


const MDTp = {
    addPost: addPostActions.ADD_POST_STARTED
};

export default connect(null, MDTp)(FormAddPost);

