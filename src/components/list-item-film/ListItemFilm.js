import React from 'react';

const ListItemFilm = props => {
    return (
        <li data-testid="itemFilm">
            { props.name }
        </li>
    );
};

export default ListItemFilm;