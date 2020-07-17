import React from "react";
import ContentImage from "../content-image/ContentImage";
import ContentText from "../content-text/ContentText";

const ListItemFilm = (props) => {
  const url = props.id === 0 ? "icon-darth-vader" : `icon-film-${props.id}`;

  return (
    <li data-testid="item">
      <ContentImage url={url} />
      <ContentText {...props} />
    </li>
  );
};

export default ListItemFilm;
