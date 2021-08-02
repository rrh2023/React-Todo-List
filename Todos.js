import React from 'react'
import Todo from './Todo'

function Todos(props) {
    return (

        <ul>
            {props.todos.map(item => {
                return (<Todo todos={props.todos} item={item} updateTodos={props.updateTodos} />)
            })}
        </ul>
    )
}

export default Todos




