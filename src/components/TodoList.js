// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.todoList.map(todo => (
        //We are in a function component so its not this.props. Its props.toggleItem
        // to pass props.
        <Todo toggleItem={props.toggleItem} key={todo.id} todo={todo} />
      ))}
      {/* <button className="clear-btn" onClick={props.clear}> Clear Tasks</button> */}
    </div>
  );
};

export default TodoList;