import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div>
      {[].concat(props.data).map((todo, index) => {
        return (
          <Todo
            key={index}
            title={todo.title}
            onRemove={()=>props.handleRemoveTodo(index)}
            onClick={() => props.handleTodoToggle(index)}
            complete={todo.isComplete}
          />
        );
      })}
    </div>
  );
}

export default Todos;
