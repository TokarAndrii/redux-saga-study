import postsTypes from '../listPosts/types';
import errorTypes from './errorTypes';
import authTypes from '../auth/authTypes';

const isErrorOpenReducer = (state = false, { type }) => {
    switch (type) {
        case errorTypes.SET_ERROR_IS_CLOSED:
            return false;
        case postsTypes.FETCH_LIST_POSTS_FAILED:
        case authTypes.AUTH_REQUEST_TOKEN_FAILED:
            return true;
        default: return state;
    }
}

export default isErrorOpenReducer;