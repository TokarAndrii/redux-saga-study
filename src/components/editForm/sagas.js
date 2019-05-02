import { put, select, call, takeLatest, delay } from "redux-saga/effects";
import api from "../../utils/api";
import editPostTypes from './editTypes';
import editPostActions from './editActions';
import listPostsActions from '../listPosts/listPostsActions';
import selectors from '../app/selectors';



function* editPost(post) {
    try {
        yield delay(500);
        const editedPost = yield select(selectors.getEditedpost);
        const result = yield call(api.editPost, editedPost);
        if (result.status === 200) {
            yield put(editPostActions.FETCH_EDIT_POST_SUCCEDED(result.data));
            yield put(listPostsActions.SET_SELECTED_LIST_TO_EMPTY());
            yield put(editPostActions.SET_EDITED_POST_TO_DEFAULT());
        }
    }
    catch (error) {
        yield put(editPostActions.FETCH_EDIT_POST_FAILED(error));
        yield put(listPostsActions.SET_SELECTED_LIST_TO_EMPTY());
        yield put(editPostActions.SET_EDITED_POST_TO_DEFAULT());
    }


}

function* editPostsWatcher() {
    yield takeLatest(editPostTypes.FETCH_EDIT_POST_STARTED, editPost);
}

export default editPostsWatcher
