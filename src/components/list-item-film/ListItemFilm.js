import React from 'react';

const ListItemFilm = props => {
    const url = props.id == 0 ? 
        './public/image/svg/darth-vader.svg' :
        `./public/image/films/film-${props.id}.jpg`;

    return (
        <li data-testid="item">
            <figure>
                <img src={ url }/>
            </figure>
            <article>
                <h2>{ props.name }</h2>
                <p> { props.description }</p>
            </article>
        </li>
    );
};

export default ListItemFilm;