import { combineReducers } from 'redux';
import listPostsReducer from '../listPosts/listPostsReducer'
const rootReducer = combineReducers({
    listPosts: listPostsReducer
});

export default rootReducer;