import React from 'react';
import ContentImage from '../content-image/ContentImage';
import ContentText from '../content-text/ContentText';

const ListItemFilm = props => {
    const url = props.id == 0 ? 
        './public/image/svg/darth-vader.svg' :
        `./public/image/films/film-${props.id}.jpg`;

    return (
        <li data-testid="item">
            <ContentImage url={ url } />
            <ContentText {...props} />
        </li>
    );
};

export default ListItemFilm;