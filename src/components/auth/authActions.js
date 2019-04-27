import authTypes from './authTypes';

const AUTH_REQUEST_TOKEN_SUCCED = token => ({
    type: authTypes.AUTH_REQUEST_TOKEN_SUCCED,
    payload: { token }
});

const AUTH_REQUEST_TOKEN_FAILED = error => ({
    type: authTypes.AUTH_REQUEST_TOKEN_FAILED,
    payload: { error }
});

const AUTH_REQUEST_TOKEN_STARTED = () => ({
    type: authTypes.AUTH_REQUEST_TOKEN_STARTED,
})


export default {
    AUTH_REQUEST_TOKEN_SUCCED,
    AUTH_REQUEST_TOKEN_FAILED,
    AUTH_REQUEST_TOKEN_STARTED
}