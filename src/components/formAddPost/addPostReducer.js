import addPostTypes from './addPostTypes';
const addPostreducer = (state = null, { type, payload }) => {
    switch (type) {
        case addPostTypes.ADD_POST_SUCCEEDED:
        case addPostTypes.ADD_POST_STARTED:
            return payload.post;
        case addPostTypes.ADD_POST_FAILED:
            return null;
        default: return state;
    }
}


export default addPostreducer;