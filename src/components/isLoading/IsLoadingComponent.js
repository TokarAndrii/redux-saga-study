import React from 'react';
import Loader from 'react-loader-spinner';

const IsLoadingComponent = ({ className }) => (
    <div className={className}>
        <Loader
            type="Bars"
            color="#000"
            height="60"
            width="60"
        />
    </div>
);


export default IsLoadingComponent;