import React, {useState} from 'react';

function Todo(props) {

    const deleteTodo = (e) => {
        let todoText = e.target.parentElement.parentElement.textContent
        let newTodos = props.todos.filter(item => {
           return item.text !== todoText
        })
        props.updateTodos(newTodos)
    }

    return (
    <li 
    key={props.item.id}
    >
        {props.item.text}
        <span>
            <i className="far fa-trash-alt icon" onClick={deleteTodo}></i>
        </span>
    </li>     
             
    )
}

export default Todo

