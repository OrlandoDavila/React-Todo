import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleItem(props.todo.id)} //When we invoke a function we pass it in anonymously
      className={`todo${props.todo.completed ? " completed" : ""}`}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;