import React from 'react';

function ListItemFilm({ id = 0, name = '', description = '' }) {
  const url = id === 0 ? 'icon-darth-vader' : `icon-film-${id}`;

  return (
    <li data-testid="item">
      <figure className="content-image">
        <i className={url}></i>
      </figure>
      <article className="content-text">
        <h2>{name}</h2>
        <p> {description}</p>
      </article>
    </li>
  );
}

export default ListItemFilm;
