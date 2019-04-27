import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Link, Route } from 'react-router-dom';
import ListPosts from '../listPosts/ListPostsContainer';
import listPostsActions from '../listPosts/listPostsActions';
import authActions from '../auth/authActions'
import IsLoadingComponent from '../isLoading/IsLoadingComponent';
import ErrorComponet from '../error/ErrorComponentContainer';
import AddPostForm from '../formAddPost/FormAddPostContainer'
import selectors from './selectors';
import styles from './App.module.css';

function App({ getListposts, isLoading, error, isErrorOpen, getToken, authToken }) {
  useEffect(() => {
    //to do call for token
    if (!authToken) {
      getToken();
    }

  });
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <p className={`${styles.one} ${styles.two}`}>
          Redux-Saga
        </p>
        <Link className={styles.linkAddForm} to="/">Home</Link>
        <Link className={styles.linkAddForm} to="/add-post">Add post</Link>
      </header>
      <div className={styles.buttonsPannel}>
        <button className={styles.fetchBtn} onClick={getListposts}>Fetch posts</button>
        <button className={styles.fetchBtn}>Delete selected</button>
        <button className={styles.fetchBtn}>Edit selected</button>

      </div>

      {!isLoading && !error && <ListPosts></ListPosts>}
      {isLoading && <IsLoadingComponent className={styles.spinner}></IsLoadingComponent>}
      {error && isErrorOpen && <ErrorComponet className={styles.error} error={error}></ErrorComponet>}
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
  authToken: selectors.getAuthToken(state)
})

const MDTp = {
  getListposts: listPostsActions.FETCH_LIST_POSTS_STARTED,
  getToken: authActions.AUTH_REQUEST_TOKEN_STARTED

}

export default connect(MSTp, MDTp)(App);