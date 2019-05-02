import editTypes from './editTypes';


const FETCH_EDIT_POST_STARTED = post => ({
    type: editTypes.FETCH_EDIT_POST_STARTED,
    payload: { post }
});
const FETCH_EDIT_POST_SUCCEDED = post => ({
    type: editTypes.FETCH_EDIT_POST_SUCCEDED,
    payload: { post }

});
const FETCH_EDIT_POST_FAILED = error => ({
    type: editTypes.FETCH_EDIT_POST_FAILED,
    payload: { error }
});

const SET_EDITED_POST_TO_DEFAULT = () => ({
    type: editTypes.SET_EDITED_POST_TO_DEFAULT
})


export default {
    FETCH_EDIT_POST_STARTED,
    FETCH_EDIT_POST_SUCCEDED,
    FETCH_EDIT_POST_FAILED,
    SET_EDITED_POST_TO_DEFAULT
}