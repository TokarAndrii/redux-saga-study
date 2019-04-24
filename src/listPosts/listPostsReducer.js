import types from './types'
const listPostsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case types.FETCH_LIST_POSTS_SUCCEEDED:
            return payload.listPosts;
        case types.FETCH_LIST_POSTS_FAILED:
            return payload.error;
        case types.FETCH_LIST_POSTS_STARTED:
            return state;
        default:
            return state
    }
};

export default listPostsReducer;