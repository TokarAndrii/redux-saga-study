import React, { Component } from 'react';
import styles from './FormAddPost.module.css'

const INITIAL_STATE = {
    title: '',
    content: ''
}

class FormAddPost extends Component {
    state = { ...INITIAL_STATE }

    handleInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit');
        const { title, content } = this.state;
        const newPost = { title, content }
        const { addPost } = this.props;
        if (!title || !content) return alert("title or content empty!!!");
        console.log(`title - ${title}, content - ${content}`);
        addPost(newPost);

    }

    render() {
        const { title, content, } = this.state;
        return (

            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.label}>
                    <span className={styles.formLabelName}>Title</span>
                    <input className={styles.input} onChange={this.handleInput} placeholder="add title" type="text" value={title} name="title"></input>
                </label>
                <label className={styles.label}>
                    <span className={styles.formLabelName}>Body</span>
                    <textarea className={styles.inputArea} rows={10} cols={100} onChange={this.handleInput}
                        placeholder="add body" type="text" value={content} name="content"></textarea>
                </label>
                <div className={styles.btnHolder}>
                    <button className={styles.submitBtn} type="submit">Submit</button>
                </div>

            </form >
        )

    }
}

export default FormAddPost;