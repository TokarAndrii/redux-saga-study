import postsTypes from '../listPosts/types';
import errorTypes from './errorTypes';

const bodyErrorReducer = (state = '', { type, payload }) => {
    switch (type) {
        case postsTypes.FETCH_LIST_POSTS_FAILED:
            return payload.error;
        case errorTypes.SET_ERROR_IS_CLOSED:
            return "";
        default: return state;
    }
}

export default bodyErrorReducer;