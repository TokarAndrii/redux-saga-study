const getListPosts = state => state.posts.listPosts;
const getIsLoading = state => state.isLoading;
const getError = state => state.error.body;
const getIsErrorOpen = state => state.error.isErrorOpen;
const getSelectedPostsList = state => state.posts.selectedPostsList;
const getPostById = (listPosts, id) => listPosts.find(post => post.id === id);
const getAuthToken = state => state.auth.token


export default {
    getListPosts, getIsLoading, getError, getIsErrorOpen,
    getSelectedPostsList, getPostById, getAuthToken
}