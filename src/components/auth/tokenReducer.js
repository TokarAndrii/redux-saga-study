import authTypes from './authTypes'
const tokenReducer = (state = null, { type, payload }) => {
    switch (type) {
        case authTypes.AUTH_REQUEST_TOKEN_SUCCED:
            return payload.token;
        case authTypes.AUTH_REQUEST_TOKEN_FAILED:
            return payload.error
        default: return state;
    }
};


export default tokenReducer;