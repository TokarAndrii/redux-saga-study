import { combineReducers } from 'redux';
import listPostsReducer from './listPostsReducer';
import selectedPostsListReducer from './selectedPostsListReducer';
import addPostReducer from '../formAddPost/addPostReducer';
import deletePostsReducer from './deletePostsReducer'


const rootPostsReducer = combineReducers({
    listPosts: listPostsReducer,
    selectedPostsList: selectedPostsListReducer,
    addPost: addPostReducer,
    deletePosts: deletePostsReducer,
});


export default rootPostsReducer;