<div>
  <h1 align="center">A Todo List App with React 🧑‍💻</h1>
  <h2>No CSS</h2>
<h2>Goals</h2>
  <ul>
  <li>
  Using entirely class based components.
  </li>
  <li>
  To Do List application of full (C.R.U.D) to do list
  </li>
     <li>
  Looks best on a small screen size (responsive).
    </li>
    
   </ul>

  <p>
    Screenshot:
  </p>

  <a href="">
    <img
      alt="TodoList React"
      src="screenshot.jpg"
    />
  </a>
</div>

<hr />

## Requirements
- NPM
- React
- uuid

## Main Components
- TodoList
- Todo


## TodoList Component
This is the main component which renders each Tasks and also contains all important functions:

```javascript
AddTodo()
EditTodo()
RemoveTodo()
toggleIsDone()
```

- TodoList - Constructor:
```javascript
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
    } 
```

- AddTodo 
A very simple way to add an object to array

```javascript
   AddTodo(item){
        this.setState({
            todoList:[...this.state.todoList,item]  })
```
- EditTodo
Creating a new list and replace with the current list:

```javascript
  const newList = this.state.todoList.map(todo=>{
  
      if (todo.id===id){
      return {...todo,task:value}
      }
      return todo
      })
      
      this.setState({todoList:newList})
     
      } 
```

- RemoveTodo
A very simple method to filter list 

```javascript
RemoveTodo(id){

this.setState({ 
    todoList:this.state.todoList.filter(t=>t.id!==id)
})

```

- toggleIsDone
We can create new list, map our list and toggle state(isDone)

```javascript
toggleIsDone(id){
    const newList = this.state.todoList.map(todo=>{
  
        if (todo.id===id){
        return {...todo,isDone:!todo.isDone}
        }
        return todo
        })
        
        this.setState({todoList:newList})
}
```
## Todo Component
It renders one task and also have a Form for edit task which is invisible and will show by state (isEditMode).
Handle functions are here but main functions passed from TodoList by props

```javascript
class Todo extends Component{

    constructor(props){
    super(props)
    this.state={
    isEditMode:false,
    task:this.props.task
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
