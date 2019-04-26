import types from '../listPosts/types';

const isLoadingreducer = (state = false, { type, payload }) => {
    switch (type) {
        case types.FETCH_LIST_POSTS_STARTED:
            return true;
        case types.FETCH_LIST_POSTS_SUCCEEDED:
        case types.FETCH_LIST_POSTS_FAILED:
            return false;
        default: return state;
    }
}

export default isLoadingreducer;