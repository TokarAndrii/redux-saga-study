import types from './types';

const FETCH_LIST_POSTS_SUCCEEDED = listPosts => ({
    type: types.FETCH_LIST_POSTS_SUCCEEDED,
    payload: { listPosts }
});

const FETCH_LIST_POSTS_FAILED = error => ({
    type: types.FETCH_LIST_POSTS_FAILED,
    payload: { error }
});

const FETCH_LIST_POSTS_STARTED = () => ({
    type: types.FETCH_LIST_POSTS_STARTED,
})

const SET_POST_TO_SELECTED_LIST = selectedList => ({
    type: types.SET_POST_TO_SELECTED_LIST,
    payload: { selectedList }
})

export default {
    FETCH_LIST_POSTS_SUCCEEDED, FETCH_LIST_POSTS_FAILED,
    FETCH_LIST_POSTS_STARTED, SET_POST_TO_SELECTED_LIST
}