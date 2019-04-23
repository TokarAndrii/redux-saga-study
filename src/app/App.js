import React from 'react';
import { connect } from 'react-redux'
import ListPosts from '../listPosts/ListPostsContainer';
import listPostsActions from '../listPosts/listPostsActions'
import styles from './App.module.css';

function App({ getListposts }) {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <p className={`${styles.one} ${styles.two}`}>
          Redux-Saga
        </p>
      </header>
      <button className={styles.fetchBtn} onClick={getListposts}>fetch posts</button>
      <ListPosts></ListPosts>
    </div>
  );
}

const MDTp = {
  getListposts: listPostsActions.FETCH_LIST_POSTS_STARTED,
}

export default connect(null, MDTp)(App);
