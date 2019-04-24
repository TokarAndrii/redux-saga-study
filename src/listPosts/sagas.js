import { put, call, takeLatest, all } from 'redux-saga/effects';
import api from '../utils/api';
import listPostsActions from './listPostsActions'
import types from './types'


function* getAllPosts() {
    try {
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
    yield all([listPostsWatcher()])
}