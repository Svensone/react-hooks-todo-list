import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return(
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}} >
    {todo.text}
    <div>
    <button onClick={() => completeTodo(index)}> Completed </button>
    <button onClick={() => removeTodo(index)} > X </button>
    </div>
    </div>
  )
} 

function TodoForm({addTodo}){
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about REact",
    isCompleted: false },
    { text: "Hooks use useState",
    isCompleted: false },
    { text: "in functional Components",
    isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    var newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    var newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
          index={index} 
          key={index} 
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;

