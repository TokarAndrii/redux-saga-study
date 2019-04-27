import { put, call, takeLatest, all, delay } from 'redux-saga/effects';
import api from '../../utils/api';
import listPostsActions from './listPostsActions';
import tokenGetWatcher from '../auth/sagas';
import addPostWatcher from '../formAddPost/sagas'
import types from './types'


function* getAllPosts() {
    try {
        // this for emulate long time api fetch to show spinner
        yield delay(500);
        const posts = yield call(api.makeRequestListPosts);

        console.log('posts at getAllPosts', posts)

        yield put(listPostsActions.FETCH_LIST_POSTS_SUCCEEDED(posts))
    }

    catch (error) {
        console.log('Oops error: ', error);
        yield put(listPostsActions.FETCH_LIST_POSTS_FAILED(error))
    }

}

function* listPostsWatcher() {
    yield takeLatest(types.FETCH_LIST_POSTS_STARTED, getAllPosts)
}

export default function* rootSaga() {
    yield all(
        [
            listPostsWatcher(), tokenGetWatcher(), addPostWatcher()
        ]
    )
}