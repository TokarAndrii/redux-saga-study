import React, { Component } from "react";
import routes from "../../configs/routes";
import styles from "./FormAddPost.module.css";

const INITIAL_STATE = {
  title: "",
  content: ""
};

class FormAddPost extends Component {
  state = { ...INITIAL_STATE };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleRedirectToMainPage = () => {
    const { history } = this.props;
    history.push(routes.INDEX);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    const newPost = { title, content };
    const { addPost } = this.props;
    if (!title || !content) return alert("title or content empty!!!");
    addPost(newPost);
    this.handleRedirectToMainPage();
  };

  render() {
    const { title, content } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          <span className={styles.formLabelName}>Title</span>
          <input
            className={styles.input}
            onChange={this.handleInput}
            placeholder="add title"
            type="text"
            value={title}
            name="title"
          />
        </label>
        <label className={styles.label}>
          <span className={styles.formLabelName}>Body</span>
          <textarea
            className={styles.inputArea}
            rows={10}
            cols={100}
            onChange={this.handleInput}
            placeholder="add body"
            type="text"
            value={content}
            name="content"
          />
        </label>
        <div className={styles.btnHolder}>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default FormAddPost;
