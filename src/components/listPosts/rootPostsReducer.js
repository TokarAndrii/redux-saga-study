import { combineReducers } from 'redux';
import listPostsReducer from './listPostsReducer';
import selectedPostsListReducer from './selectedPostsListReducer'



const rootPostsReducer = combineReducers({
    listPosts: listPostsReducer,
    selectedPostsList: selectedPostsListReducer,
});

export default rootPostsReducer;