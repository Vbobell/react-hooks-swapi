import React from 'react';

const ListItemFilm = props => {
    return (
        <li data-testid="item">
            { props.name }
        </li>
    );
};

export default ListItemFilm;