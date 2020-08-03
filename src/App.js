  
import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';


const todoList = 
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todoList: todoList,
    }
  }

//Update State For When a New Item is added

addTask = taskName => {
  const newTask = {
    task: taskName,
    id: Date.now(), //gives us a unique string
    completed: false
  };

  this.setState({
    todoList: [...this.state.todoList, newTask]
  })
}

removeTasks = e => {
  e.preventDefault();
 // let todos
  this.setState({ todoList: this.state.todoList.filter(todo => !todo.completed)});
  console.log("Function called")
} 


  // Add Toggle

  toggleItem = todoid => {
    // We pass it in as we invoke toggled item
    //We want to update state in a class component
    //loop through all groceries, find the one we've clicked
    //else, leave the item untouched
    this.setState({
      todoList: this.state.todoList.map(todo => {
        // It creates a new array for us, also we just want to update one item

        if (todo.id ===todoid) {
          return {
            ...todo, // copy and paste old item into a new object or instance
            completed: !todo.completed // overwrite the purchase field with toggled boolean
          };
        } else {
          return todo; // then we return the object or new instance adding it to our new array
        }
      })
    });
  };


  render() {
    return (

     <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoList
      toggleItem = {this.toggleItem}
   todoList={this.state.todoList}
    />
        
      </div>
      <TodoForm addTask = {this.addTask} delete = {this.removeTasks} />
</div>


    );
  }
}

export default App;
