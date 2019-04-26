import React, { Component } from 'react';
import styles from './ListPosts.module.css';
import selectors from '../app/selectors';

const INITIAL_STATE = {
    selectedPosts: [],
}

class ListPosts extends Component {
    state = { ...INITIAL_STATE }


    handleSelect = (id) => {
        const { selectedPosts } = this.state;
        const { listPosts, setPostToSelectedList } = this.props;
        console.log('id', id);
        const existPost = selectedPosts.find(curr => curr.id === id);
        if (existPost) {
            console.log("existPost", existPost);
            const newList = selectedPosts.filter(post => post.id !== id);
            this.setState({ selectedPosts: [...newList] }, () => setPostToSelectedList(this.state.selectedPosts));
            return;

        }

        const foundPost = selectors.getPostById(listPosts, id);
        console.log("foundPost", foundPost);
        this.setState(prevState => ({ selectedPosts: [...prevState.selectedPosts, foundPost] }), () => setPostToSelectedList(this.state.selectedPosts));
        //console.log(this.state.selectedPosts)
        //addItem(foundPost);

    }
    render() {
        const { listPosts = [] } = this.props;
        const { selectedPosts } = this.state;
        return (
            <>
                {
                    listPosts.length > 0 && < div >
                        <h1>List Posts</h1>
                        <ul className={styles.list}>
                            {listPosts.map(post => (
                                <li key={post.id} className={styles.postItem}>
                                    <div className={styles.ItemContent}>
                                        <h3>{post.title}</h3>
                                        <div className={styles.postBody}>{post.body}</div>
                                    </div>
                                    <input onChange={() => this.handleSelect(post.id)} name="selectedPosts" className={styles.checkBox}
                                        checked={selectedPosts.find(curr => curr.id === post.id)} type="checkbox"></input>
                                </li>
                            ))}
                        </ul>
                    </div >
                }

            </>
        );
    }
}








export default ListPosts;