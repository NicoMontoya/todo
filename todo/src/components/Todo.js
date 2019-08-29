import React from 'react'

const Todo = props => {
    console.log(props)
    return (
        <h3
            style = {props.complete ? {textDecoration: "line-through"} : null}
            onClick={() => props.toggleComplete(props.index)}
        >
            {props.todo.task}
        </h3>
    )
}

export default Todo