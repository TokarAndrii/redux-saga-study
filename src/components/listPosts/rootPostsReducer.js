import { combineReducers } from 'redux';
import listPostsReducer from './listPostsReducer';
import selectedPostsListReducer from './selectedPostsListReducer';
import addPostReducer from '../formAddPost/addPostReducer';



const rootPostsReducer = combineReducers({
    listPosts: listPostsReducer,
    selectedPostsList: selectedPostsListReducer,
    addPost: addPostReducer,
});


export default rootPostsReducer;