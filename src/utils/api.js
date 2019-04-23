import axios from 'axios';

const postApiUrl = 'http://jsonplaceholder.typicode.com/posts/';
const GET = 'get'


const makeRequestListPosts = (url) => {
    return axios({
        method: GET,
        url: postApiUrl
    })
        .then(resp => {
            console.log('resp.data - ', resp)
            return resp.data
        })
        .catch(err => err)
}

export default { makeRequestListPosts }