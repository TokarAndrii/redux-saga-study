import ListPosts from './ListPosts';
import { connect } from 'react-redux';
import selectors from '../app/selectors'

const MSTp = state => ({
    listPosts: selectors.getListPosts(state),
});

export default connect(MSTp)(ListPosts);