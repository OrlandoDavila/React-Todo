import React from "react";


class TodoForm  extends React.Component {
//Constructor with state

constructor(props){
    super (props);
    this.state = {
        task: ""
    };
}

handleChanges = e => {
    //update state with each keystroke

    this.setState({
        task: e.target.value
    });
};



handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    //We want props within a class component.
    //React gives us all of our props in a props property. Props is a class property.

    this.setState({
        task:""
    });
};

render (){

   

return(
    <form onSubmit = {this.handleSubmit}>
    
    <input 
     autocomplete="off"
        type = "text"
        name = "task"
        value = {this.state.task}
        onChange = {this.handleChanges}
/>
<button>Add</button>
<button className="clear-btn"   onClick={this.props.delete} > Clear Tasks</button>



    </form>
)}
}

export default TodoForm