const getListPosts = state => state.posts.listPosts;
const getIsLoading = state => state.isLoading;
const getError = state => state.error.body;
const getIsErrorOpen = state => state.error.isErrorOpen;
const getSelectedPostsList = state => state.posts.selectedPostsList;
const getSelectedPostItem = state => state.posts.selectedPostsList[0];
const getPostById = (listPosts, id) => listPosts.find(post => post.id === id);
const getAuthToken = state => state.auth.token;
const getAddPost = state => state.posts.addPost;
const getDeletedPost = state => state.posts.deletePosts;

export default {
  getListPosts,
  getIsLoading,
  getError,
  getIsErrorOpen,
  getSelectedPostsList,
  getPostById,
  getAuthToken,
  getSelectedPostItem,
  getAddPost,
  getDeletedPost
};
