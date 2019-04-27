import addPostTypes from './addPostTypes';

const ADD_POST_STARTED = () => ({
    type: addPostTypes.ADD_POST_STARTED
});

const ADD_POST_FAILED = (error) => ({
    type: addPostTypes.ADD_POST_FAILED,
    payload: { error }
});

const ADD_POST_SUCCEEDED = (post) => ({
    type: addPostTypes.ADD_POST_SUCCEEDED,
    payload: { post }
});

export default { ADD_POST_STARTED, ADD_POST_FAILED, ADD_POST_SUCCEEDED }