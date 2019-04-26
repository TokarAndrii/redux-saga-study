import { combineReducers } from 'redux';
import bodyErrorReducer from './bodyErrorReducer';
import isErrorOpenReducer from './isErrorOpenReducer'

const rootErrorReducer = combineReducers({
    body: bodyErrorReducer,
    isErrorOpen: isErrorOpenReducer,
});

export default rootErrorReducer;