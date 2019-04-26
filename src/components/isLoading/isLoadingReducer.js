import postTypes from '../listPosts/types';
import authTypes from '../auth/authTypes'

const isLoadingreducer = (state = false, { type, payload }) => {
    switch (type) {
        case postTypes.FETCH_LIST_POSTS_STARTED:
        case authTypes.AUTH_REQUEST_TOKEN_STARTED:
            return true;
        case postTypes.FETCH_LIST_POSTS_SUCCEEDED:
        case postTypes.FETCH_LIST_POSTS_FAILED:
        case authTypes.AUTH_REQUEST_TOKEN_SUCCED:
        case authTypes.AUTH_REQUEST_TOKEN_FAILED:
            return false;
        default: return state;
    }
}

export default isLoadingreducer;