import React from "react";

const Links = (props) => {
  return (
    <a
      href={props.url}
      target="blank"
      id={props.id}
      className="link-title link"
    >
      {props.title}
    </a>
  );
};

export default Links;
