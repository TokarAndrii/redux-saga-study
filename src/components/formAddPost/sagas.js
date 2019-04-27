import { put, call, takeLatest, delay } from 'redux-saga/effects';
import api from '../../utils/api';
import addPostTypes from './addPostTypes';
import addPostActions from './addPostActions';



function* addPost(post) {
    try {
        // this for emulate long time api fetch to show spinner
        yield delay(500);
        const result = yield call(api.addPost(post));

        console.log('result at addPost', result);

        yield put(addPostActions.ADD_POST_SUCCEEDED(post));
    }

    catch (error) {
        console.log('Oops error: ', error);

    }
}

function* addPostWatcher() {
    yield takeLatest(addPostTypes.ADD_POST_STARTED, addPost)
}

export default addPostWatcher;