import React from "react";

import { ReactComponent as RemoveIcon } from "../icons/SVG/x.svg";
import "./Todo.css";

function Todo(props) {
  const handleRemoveIconClick = (e) => {
    e.stopPropagation();
    props.onRemove();
  };

  return (
    <div
      onClick={props.onClick}
      className={`todo${props.complete ? " complete" : ""}`}
    >
      <span className="todo_title">{`${props.title}${
        props.complete ? " (complete)" : ""
      }`}</span>
      <div className="todo_group-btn">
        <RemoveIcon
          onClick={handleRemoveIconClick}
          className="btn btn_remove"
        />
      </div>
    </div>
  );
}

export default Todo;
