import React, { Component } from "react";
import styles from "./ListPosts.module.css";
import selectors from "../app/selectors";

const INITIAL_STATE = {
  selectedPosts: []
};

class ListPosts extends Component {
  state = { ...INITIAL_STATE };

  handleSelect = id => {
    const { selectedPosts } = this.state;
    const { listPosts, setPostToSelectedList } = this.props;
    const existPost = selectedPosts.find(curr => curr.id === id);
    if (existPost) {
      const newList = selectedPosts.filter(post => post.id !== id);
      this.setState({ selectedPosts: [...newList] }, () =>
        setPostToSelectedList(this.state.selectedPosts)
      );
      return;
    }

    const foundPost = selectors.getPostById(listPosts, id);
    this.setState(
      prevState => ({ selectedPosts: [...prevState.selectedPosts, foundPost] }),
      () => setPostToSelectedList(this.state.selectedPosts)
    );
  };
  render() {
    const { listPosts = [] } = this.props;
    const { selectedPosts } = this.state;
    return (
      <>
        {listPosts.length > 0 && (
          <div>
            <h1>List Posts</h1>
            <ul className={styles.list}>
              {listPosts.map(post => (
                <li key={post.id} className={styles.postItem}>
                  <div className={styles.ItemContent}>
                    <h3>{post.title}</h3>
                    <div className={styles.postBody}>{post.content}</div>
                  </div>
                  <input
                    onChange={() => this.handleSelect(post.id)}
                    name="selectedPosts"
                    className={styles.checkBox}
                    checked={selectedPosts.find(curr => curr.id === post.id)}
                    type="checkbox"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default ListPosts;
