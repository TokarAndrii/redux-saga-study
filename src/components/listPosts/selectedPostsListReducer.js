import postsTypes from './types';

const selectedPostsListreducer = (state = [], { type, payload }) => {
    switch (type) {
        case postsTypes.SET_POST_TO_SELECTED_LIST:
        case postsTypes.DESELECT_POST_FROM_SELECTED_LIST:
            return payload.selectedList
        default: return state;
    }
};

export default selectedPostsListreducer;