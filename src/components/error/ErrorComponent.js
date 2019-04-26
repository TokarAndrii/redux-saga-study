import React from 'react';
import styles from './ErrorComponent.module.css'

const ErrorComponent = ({ className, error, handleClose }) => (
    <div className={className}>
        <button className={styles.closeBtn} onClick={handleClose}>close</button>
        <div>Oops it seems something went wrong:</div>
        {error.response && (
            <>
                <div>{error.response.status}</div>
                <div>{error.response.statusText}</div>
            </>
        )}
    </div>
);


export default ErrorComponent;