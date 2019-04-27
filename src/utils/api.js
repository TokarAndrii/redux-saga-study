import axios from 'axios';
import store from '../components/app/store';
import selectors from '../components/app/selectors';

const BASE_API_URL = "http://test.subj.ua/api/v1";
//const postApiUrl = 'http://jsonplaceholder.typicode.com';

const POSTS_URL = '/notes';
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
    console.log('authToken at makeRequestListPosts', authToken)
    return axiosInstance(POSTS_URL, {
        method: GET,
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(resp => {
            console.log('resp at makeRequestListPosts', resp)
            // if (Array.isArray(resp.data)) return resp.data;
            // const res = [];
            // res.push(resp.data)
            return resp.data.notes;
        })
}


const makeRequestToken = () => {
    return axiosInstance.post(TOKEN_URL, { "userName": "Andrii Tokar" })
        .then(resp => {
            console.log('resp', resp);
            return resp.data.token;
        })

}

const addPost = ({ title, content }) => {
    console.log('addPostRequest');
    const state = store.getState();
    const authToken = selectors.getAuthToken(state);
    console.log('authToken at addPostRequest', authToken);
    return axiosInstance.post(
        POSTS_URL,
        {
            "title": title,
            "content": content

        },
        {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(resp => {
            console.log('resp at addPost', resp);
            return resp;
        })

}



export default {
    makeRequestListPosts,
    makeRequestToken,
    addPost
}