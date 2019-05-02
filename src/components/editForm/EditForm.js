import React, { useState, useEffect } from 'react';
import routes from '../../configs/routes'
import styles from './EditForm.module.css'

const EditForm = ({ selectedPost, history, handleEditPost }) => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        const { title, content, id } = selectedPost;
        setTitle(title);
        setContent(content);
        setId(id)
    }, [selectedPost]);

    const handleRedirectToMainPage = () => {
        history.push(routes.INDEX);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const editedPost = { id, title, content };
        handleEditPost(editedPost);
        handleRedirectToMainPage()
    };


    const handleChangeInput = ({ target }) => {
        const { name, value } = target;
        if (name === "title") setTitle(value);
        if (name === "content") setContent(value);
    }
    return (
        <>
            <h3>Edit post form</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    <span className={styles.formLabelName}>Title</span>
                    <input
                        className={styles.input}
                        placeholder="add title"
                        type="text"
                        value={title}
                        name="title"
                        onChange={handleChangeInput}
                    />
                </label>
                <label className={styles.label}>
                    <span className={styles.formLabelName}>Body</span>
                    <textarea
                        className={styles.inputArea}
                        rows={10}
                        cols={100}
                        placeholder="add body"
                        type="text"
                        value={content}
                        name="content"
                        onChange={handleChangeInput}
                    />
                </label>
                <div className={styles.btnHolder}>
                    <button className={styles.submitBtn} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}


export default EditForm;