import editTypes from './editTypes'
const editPostReducer = (state = null, { type, payload }) => {
    switch (type) {
        case editTypes.FETCH_EDIT_POST_STARTED:
        case editTypes.FETCH_EDIT_POST_SUCCEDED:
            return payload.post
        case editTypes.FETCH_EDIT_POST_FAILED:
            return false;
        case editTypes.SET_EDITED_POST_TO_DEFAULT:
            return null;
        default: return state;
    }
}

export default editPostReducer


