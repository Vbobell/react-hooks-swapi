import React from "react";

const ContentImage = (props) => {
  return (
    <figure className="content-image">
      <i className={props.url}></i>
    </figure>
  );
};

export default ContentImage;
