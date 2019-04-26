import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer'

const authRootReducer = combineReducers({
    token: tokenReducer
});

export default authRootReducer;