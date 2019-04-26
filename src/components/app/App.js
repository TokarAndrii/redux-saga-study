import React from 'react';
import { connect } from 'react-redux'
import ListPosts from '../listPosts/ListPostsContainer';
import listPostsActions from '../listPosts/listPostsActions';
import IsLoadingComponent from '../isLoading/IsLoadingComponent';
import ErrorComponet from '../error/ErrorComponentContainer';
import selectors from './selectors';
import styles from './App.module.css';

function App({ getListposts, isLoading, error, isErrorOpen }) {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <p className={`${styles.one} ${styles.two}`}>
          Redux-Saga
        </p>
      </header>
      <div className={styles.buttonsPannel}>
        <button className={styles.fetchBtn} onClick={getListposts}>Fetch posts</button>
        <button className={styles.fetchBtn}>Delete selected</button>
        <button className={styles.fetchBtn}>Edit selected</button>
      </div>

      {!isLoading && !error && <ListPosts></ListPosts>}
      {isLoading && <IsLoadingComponent className={styles.spinner}></IsLoadingComponent>}
      {error && isErrorOpen && <ErrorComponet className={styles.error} error={error}></ErrorComponet>}
    </div>
  );
}

const MSTp = state => ({
  isLoading: selectors.getIsLoading(state),
  error: selectors.getError(state),
  isErrorOpen: selectors.getIsErrorOpen(state),
})

const MDTp = {
  getListposts: listPostsActions.FETCH_LIST_POSTS_STARTED,
}

export default connect(MSTp, MDTp)(App);
