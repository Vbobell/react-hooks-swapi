import React from 'react';

const ItemFilm = props => {
    return (
        <li data-testid="itemFilm">
            { props.name }
        </li>
    );
};

export default ItemFilm;