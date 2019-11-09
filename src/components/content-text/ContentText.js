import React from 'react';

const ContentText = props => {
    return (
        <article className="content-text">
            <h2>{ props.name }</h2>
            <p> { props.description }</p>
        </article>
    );
};

export default ContentText;