import React, { useState } from 'react';
import styles from './ListPosts.module.css';
import selectors from '../app/selectors'

const ListPosts = ({ listPosts = [], setPostToSelectedList }) => {
    const [selectedPosts, setSelectedPost] = useState([]);

    const addItem = item => {
        return setSelectedPost(state => ([...selectedPosts, item]));
    };



    const handleSelect = (id) => {
        console.log('id', id);
        const existPost = selectedPosts.find(curr => curr.id === id);
        if (existPost) {
            console.log("existPost", existPost);
        }

        const foundPost = selectors.getPostById(listPosts, id);
        console.log("foundPost", foundPost);
        addItem(foundPost);
        setPostToSelectedList(selectedPosts);
    }

    return (
        <>
            {listPosts.length > 0 && < div >
                <h1>List Posts</h1>
                <ul className={styles.list}>
                    {listPosts.map(post => (
                        <li key={post.id} className={styles.postItem}>
                            <div className={styles.ItemContent}>
                                <h3>{post.title}</h3>
                                <div className={styles.postBody}>{post.body}</div>
                            </div>
                            <input onChange={() => handleSelect(post.id)} name="selectedPosts" className={styles.checkBox}
                                checked={selectedPosts.find(curr => curr.id === post.id)} type="checkbox"></input>
                        </li>
                    ))}
                </ul>
            </div >}

        </>
    );
}






export default ListPosts;