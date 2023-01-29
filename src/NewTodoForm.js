import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            task: "",
            isDone: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    } // End of handle Change


    handleSubmit(e) {
        e.preventDefault()
        this.props.addTodo({ ...this.state, id: uuidv4(), isDone: false })
        this.setState({
            id: "",
            task: ""
        })
    }

    render() {


        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">Task Name:</label>
                <input id="task" name="task" type="text"
                    onChange={this.handleChange}
                    value={this.state.task}></input>
                <button>Add Task</button>
            </form>



        )
    }// End of render form

}
export default NewTodoForm