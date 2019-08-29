import React from 'react'

const TodoForm = props => {
    return (
        <div>
            <h4>Add a New Todo</h4>
            <form>
                <input 
                    value={props.todoText}
                    type="text"
                    name="todoText"
                    required
                    onChange={props.handleChanges}
                />
            </form>
            <div class="buttons">
                <button onClick={props.addTodo}>Add Todo</button>
                <button onClick={props.clearComplete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoForm