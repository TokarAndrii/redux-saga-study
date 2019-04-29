import { put, call, takeLatest, delay } from 'redux-saga/effects';
import api from '../../utils/api';
import addPostTypes from './addPostTypes';
import addPostActions from './addPostActions';

function* addPost(newPostAction) {
    try {
        // this for emulate long time api fetch to show spinner
        yield delay(500);
        const { post } = newPostAction.payload;
        const { title, content } = post;
        console.log('newPost', post)
        const result = yield call(api.addPost, title, content);

        console.log('result at function* addPost', result);
        console.log('result at function* addPost', result.status);

        if (result.status === 201) yield put(addPostActions.ADD_POST_SUCCEEDED(post));


    }

    catch (error) {
        console.log('Oops error: ', error);
        console.log('error', error);
        yield put(addPostActions.ADD_POST_FAILED(error))

    }
}

function* addPostWatcher() {
    yield takeLatest(addPostTypes.ADD_POST_STARTED, addPost)
}

export default addPostWatcher;