import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Link, Route } from "react-router-dom";
import ListPosts from "../listPosts/ListPostsContainer";
import listPostsActions from "../listPosts/listPostsActions";
import authActions from "../auth/authActions";
import IsLoadingComponent from "../isLoading/IsLoadingComponent";
import ErrorComponet from "../error/ErrorComponentContainer";
import AddPostForm from "../formAddPost/FormAddPostContainer";
import RevertSnackBar from "../revertOperation/RevertSnackBarContainer";
import selectors from "./selectors";
import styles from "./App.module.css";

function App({
  getListposts,
  isLoading,
  error,
  isErrorOpen,
  getToken,
  authToken,
  handleDeletePosts,
  selectedListPosts,
  addPost,
  deletedPost,
  isShowRevert
}) {
  useEffect(() => {
    if (!authToken) {
      getToken();
    }

    if (authToken) getListposts();
  }, [authToken, getToken, addPost, getListposts, deletedPost, error]);

  const handleDelete = () => {
    console.log(
      "selectedListPosts",
      JSON.stringify(selectedListPosts, null, 2)
    );
    if (
      (selectedListPosts && selectedListPosts.length > 1) ||
      !selectedListPosts
    ) {
      alert("please select only 1 element for deleting");
      return;
    }

    handleDeletePosts();
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Link className={styles.linkAddForm} to="/">
          Home
        </Link>
        <Link className={styles.linkAddForm} to="/add-post">
          Add post
        </Link>
      </header>
      <div className={styles.buttonsPannel}>
        <button className={styles.fetchBtn} onClick={getListposts}>
          Fetch posts
        </button>
        <button className={styles.fetchBtn} onClick={handleDelete}>
          Delete selected
        </button>
        <button className={styles.fetchBtn}>Edit selected</button>
      </div>
      {isShowRevert && <RevertSnackBar className={styles.revertSnack} />}

      {!isLoading && !error && <ListPosts />}
      {isLoading && !error && <IsLoadingComponent />}
      {error && isErrorOpen && (
        <ErrorComponet className={styles.error} error={error} />
      )}
      <Switch>
        <Route path="/add-post" component={AddPostForm} />
      </Switch>
    </div>
  );
}

const MSTp = state => ({
  isLoading: selectors.getIsLoading(state),
  error: selectors.getError(state),
  isErrorOpen: selectors.getIsErrorOpen(state),
  authToken: selectors.getAuthToken(state),
  selectedListPosts: selectors.getSelectedPostItem(state),
  addPost: selectors.getAddPost(state),
  deletedPost: selectors.getDeletedPost(state),
  isShowRevert: selectors.getIsShowRevert(state)
});

const MDTp = {
  getListposts: listPostsActions.FETCH_LIST_POSTS_STARTED,
  getToken: authActions.AUTH_REQUEST_TOKEN_STARTED,
  handleDeletePosts: listPostsActions.FETCH_LIST_POSTS_DELETE_STARTED
};

export default connect(
  MSTp,
  MDTp
)(App);
