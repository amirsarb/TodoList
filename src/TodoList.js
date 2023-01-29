import React, { Component } from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import NewTodoForm from './NewTodoForm'

class TodoList extends Component{

    constructor(props){
        super(props)
        this.state={
        todoList:[{id:uuidv4(),task:"Do the dishes",isDone:false},
          {id:uuidv4(),task:"Do the ironing",isDone:false}]
        }

        this.AddTodo = this.AddTodo.bind(this)
        this.RemoveTodo = this.RemoveTodo.bind(this)
        this.EditTodo = this.EditTodo.bind(this)
        this.toggleIsDone = this.toggleIsDone.bind(this)
    } // End of constructor


    AddTodo(item){
        this.setState({
            todoList:[...this.state.todoList,item]
        })

    }
RemoveTodo(id){

this.setState({ 
    todoList:this.state.todoList.filter(t=>t.id!==id)
})

}

toggleIsDone(id){
    const newList = this.state.todoList.map(todo=>{
  
        if (todo.id===id){
        return {...todo,isDone:!todo.isDone}
        }
        return todo
        })
        
        this.setState({todoList:newList})
}

EditTodo(id,value){
 
    const newList = this.state.todoList.map(todo=>{
  
      if (todo.id===id){
      return {...todo,task:value}
      }
      return todo
      })
      
      this.setState({todoList:newList})
     
      } // End of EditTodo





    render(){
const todos = this.state.todoList.map(item=>{
   return <Todo key={item.id} task={item.task} id={item.id} 
   removeTodo = {this.RemoveTodo} 
   editTodo={this.EditTodo}
   isDone={item.isDone}
   toggleIsDone = {this.toggleIsDone}
   />
    })
        return(<div><h1>Todo List</h1>
        {todos}
        <br />
        <NewTodoForm addTodo={this.AddTodo}/>
        </div>)
    }
}
export default TodoList