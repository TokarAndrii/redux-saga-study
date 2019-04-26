import ListPosts from './ListPosts';
import { connect } from 'react-redux';
import selectors from '../app/selectors';
import postsActions from './listPostsActions';

const MSTp = state => ({
    listPosts: selectors.getListPosts(state),
});

const MDTp = {
    setPostToSelectedList: postsActions.SET_POST_TO_SELECTED_LIST
}

export default connect(MSTp, MDTp)(ListPosts);