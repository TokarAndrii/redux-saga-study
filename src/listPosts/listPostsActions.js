import types from './types';

const FETCH_LIST_POSTS_SUCCEEDED = listPosts => ({
    type: types.FETCH_LIST_POSTS_SUCCEEDED,
    payload: { listPosts }
});

const FETCH_LIST_POSTS_FAILED = error => ({
    type: types.FETCH_LIST_POSTS_SUCCEEDED,
    payload: { error }
});

const FETCH_LIST_POSTS_STARTED = () => ({
    type: types.FETCH_LIST_POSTS_STARTED,
})

export default { FETCH_LIST_POSTS_SUCCEEDED, FETCH_LIST_POSTS_FAILED, FETCH_LIST_POSTS_STARTED }