import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component{

    constructor(props){
        super(props)
this.state={
    isEditMode:false,
    task:this.props.task
}

this.handleRemove = this.handleRemove.bind(this)
this.handleToggle = this.handleToggle.bind(this)
this.hanldeEdit = this.hanldeEdit.bind(this)
this.handleChange = this.handleChange.bind(this)
this.handletoggleDone = this.handletoggleDone.bind(this)
    } // End of constructor

    handleToggle(){
this.setState({isEditMode:!this.state.isEditMode})


    }// End handle toggle form

//Handle save button for edit
hanldeEdit(e){
e.preventDefault()
this.props.editTodo(this.props.id,this.state.task)
  this.setState({isEditMode:false})

} // End of hanldeEdit


    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }


    handletoggleDone(){
this.props.toggleIsDone(this.props.id)

    }

// Remove item by id
    handleRemove(){
this.props.removeTodo(this.props.id)
}


    render(){
        let result
        const {id}  = this.props.task
        if (this.state.isEditMode){
            result=(
            <div>
            <form onSubmit={this.hanldeEdit}>
            <input name="task" type="text" 
            value={this.state.task}
            onChange={this.handleChange}
            />
            <button>Save</button>
            </form>
            
            </div>
            
            )
            
            } else {
        result = (<div key={id}>
              <strong onDoubleClick={this.handletoggleDone} className={this.props.isDone ? "completed":""}>
            {this.props.task}
        </strong>
        <button onClick={this.handleToggle}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      

        </div>)

        }
        return result
    }
}
export default  Todo