import React, {useState} from 'react';
import Todos from './components/Todos';
import axios from "axios";

function App() {
//state
  const [todo, setTodo] = useState({
    text: '',
    id: Math.random() * 1000000
  });

  const [todos, setTodos] = useState([]);

// handle functions
  const handleChange = (e) => {
    setTodo({
      text: e.target.value,
      id: todo.id
    });
    console.log(`this is the todo text: ` + todo.text)
  }
 
  const handleClick = (e) => {
    e.preventDefault();

    setTodos([...todos])
    let tempTodos = todos
    tempTodos.push(todo)
    setTodos(tempTodos);    
    setTodo({
      text: '',
      id: Math.random() * 1000000
    })
  }

  const updateTodos = (arr) => {
    setTodos(arr)
  }


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Add a todo" value={todo.text}onChange={handleChange}/>
        <button onClick={handleClick}>Submit Todo</button>
       <Todos todos={todos} updateTodos={updateTodos}/>
      </form>
    </div>
  );
}

export default App;
