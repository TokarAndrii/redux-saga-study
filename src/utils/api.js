import axios from 'axios';
import store from '../components/app/store';
import selectors from '../components/app/selectors';

const BASE_API_URL = "http://test.subj.ua/api/v1";
//const postApiUrl = 'http://jsonplaceholder.typicode.com';

const POSTS_URL = '/posts';
const TOKEN_URL = '/tokens'


const GET = 'get';
//const POST = 'post';


//const APPLICATION_TOKEN = "";


const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    // headers: {
    //     Authorization: { Bearer: APPLICATION_TOKEN }
    // }
});

const makeRequestListPosts = () => {
    const state = store.getState();
    const authToken = selectors.getAuthToken(state);
    console.log('authToken', authToken)
    return axiosInstance(POSTS_URL, {
        method: GET,
        headers: {
            Authorization: { Bearer: authToken }
        }
    })
        .then(resp => {
            if (Array.isArray(resp.data)) return resp.data;
            const res = [];
            res.push(resp.data)

            return res;
        })
}


const makeRequestToken = () => {
    return axiosInstance.post(TOKEN_URL, { "userName": "Andrii Tokar" })
        .then(resp => {
            console.log('resp', resp);
            return resp.data.token;
        })

}

export default {
    makeRequestListPosts,
    makeRequestToken
}