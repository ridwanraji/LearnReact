import React from 'react'
import TodoData from "./Data/TodoData"
import TodoComponent from './Components/TodoComponent'

class TodoApp extends React.Component {
    constructor(){
        super()
        this.state = {
            todo: TodoData
        }
    }
    render(){
        let TodoItems = this.state.todo.map(
            function(todos){
                console.log(todos)
                return(
                    <TodoComponent
                        key = {todos.id}
                        items = {todos}
                    />
                )
            }
        )
        return(
            <div>
                <h1>TODO APP</h1>
                {TodoItems}
            </div>
        )
    }
}
export default TodoApp