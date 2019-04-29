import postTypes from '../listPosts/types';
import authTypes from '../auth/authTypes';
import addPostTypes from '../formAddPost/addPostTypes';

const isLoadingreducer = (state = false, { type, }) => {
    switch (type) {
        case postTypes.FETCH_LIST_POSTS_STARTED:
        case authTypes.AUTH_REQUEST_TOKEN_STARTED:
        case addPostTypes.ADD_POST_STARTED:
        case postTypes.FETCH_LIST_POSTS_DELETE_STARTED:
            return true;
        case postTypes.FETCH_LIST_POSTS_SUCCEEDED:
        case postTypes.FETCH_LIST_POSTS_FAILED:
        case authTypes.AUTH_REQUEST_TOKEN_SUCCED:
        case authTypes.AUTH_REQUEST_TOKEN_FAILED:
        case addPostTypes.ADD_POST_FAILED:
        case addPostTypes.ADD_POST_SUCCEEDED:
        case postTypes.FETCH_LIST_POSTS_DELETE_SUCCEEDED:
        case postTypes.FETCH_LIST_POSTS_DELETE_FAILED:
            return false;
        default: return state;
    }
}

export default isLoadingreducer;