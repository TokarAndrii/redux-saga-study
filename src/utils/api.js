import axios from 'axios';

const postApiUrl = 'http://jsonplaceholder.typicode.com/posts/';
const GET = 'get'


const makeRequestListPosts = (url) => {
    return axios({
        method: GET,
        url: postApiUrl
    })
        .then(resp => {
            if (Array.isArray(resp.data)) return resp.data;
            const res = [];
            res.push(resp.data)

            return res;
        })
}

export default { makeRequestListPosts }