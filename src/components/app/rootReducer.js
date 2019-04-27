import { combineReducers } from 'redux';
import rootPostsReducer from '../listPosts/rootPostsReducer';
import isLoadingReducer from '../isLoading/isLoadingReducer';
import rootErrorReducer from '../error/rootErrorReducer';
import authReducer from '../auth/authRootReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    posts: rootPostsReducer,
    isLoading: isLoadingReducer,
    error: rootErrorReducer
});

export default rootReducer;