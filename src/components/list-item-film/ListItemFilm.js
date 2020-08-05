import React from "react";

function ListItemFilm(props) {
  const url = props.id === 0 ? "icon-darth-vader" : `icon-film-${props.id}`;

  return (
    <li data-testid="item">
      <figure className="content-image">
        <i className={url}></i>
      </figure>
      <article className="content-text">
        <h2>{props.name}</h2>
        <p> {props.description}</p>
      </article>
    </li>
  );
}

export default ListItemFilm;
