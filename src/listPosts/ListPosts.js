import React from 'react';
import styles from './ListPosts.module.css'

const ListPosts = ({ listPosts = [] }) =>
    (
        <div>
            <h1>list posts</h1>
            <ul className={styles.list}>
                {listPosts.map(post => (
                    <li key={post.id} className={styles.postItem}>
                        <h3>{post.title}</h3>
                        <div className={styles.postBody}>{post.body}</div>
                    </li>
                ))}
            </ul>
        </div >
    )



export default ListPosts;