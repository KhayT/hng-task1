import React from "react";

const Links = (props) => {
  return (
    <div className="link">
      <a href={props.url} target="blank" id={props.id} className="link-title">
        {props.title}
      </a>
    </div>
  );
};

export default Links;
