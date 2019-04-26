import { combineReducers } from 'redux';
import rootPostsReducer from '../listPosts/rootPostsReducer';
import isLoadingReducer from '../isLoading/isLoadingReducer';
import rootErrorReducer from '../error/rootErrorReducer';


const rootReducer = combineReducers({
    posts: rootPostsReducer,
    isLoading: isLoadingReducer,
    error: rootErrorReducer
});

export default rootReducer;