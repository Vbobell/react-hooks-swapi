import React from 'react';

const ContentImage = props => {
    return (
        <figure className="content-image">
            <img src={ props.url }/>
        </figure>
    );
};

export default ContentImage;