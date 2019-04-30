import React, { Component } from "react";
import styles from "./RevertSnackBar.module.css";

class RevertSnackBar extends Component {
  handleRevertClick = () => {
    const { handleRevert } = this.props;
    handleRevert();
  };
  render() {
    return (
      <div className={styles.revertSnack}>
        <p>successful operation!</p>
        <button className={styles.btn} onClick={this.handleRevertClick}>
          undo
        </button>
      </div>
    );
  }
}

export default RevertSnackBar;
