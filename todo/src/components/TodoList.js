import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todoList.map((todo, index) => {
                return (
                    <Todo 
                        index={index}
                        todo={todo}
                        complete={todo.complete}
                        toggleComplete={props.toggleComplete}
                    />
                )
            })}
        </div>
    )
}

export default TodoList 