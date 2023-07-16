import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import TimerControls from "./components/TimerControls";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(0);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");

  useEffect(() => {
    document.title = `To-do List (${todos.length})`;
  }, [todos]);

  const InputOnChange = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, input]);
    setCompleted([...completed, false]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);

    const updatedCompleted = [...completed];
    updatedCompleted.splice(index, 1);
    setCompleted(updatedCompleted);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
    setEditedTodo(todos[index]);
  };

  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditedTodo("");
  };

  const toggleComplete = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompleted(updatedCompleted);
  };

  const deleteAllTodos = () => {
    setTodos([]);
    setCompleted([]);
  };

  const updateTimer = (newTimer) => {
    setTimer(newTimer);
  };

  return (
    <>
      <div className="todo-list-container">
        <Header />
        <Form
          input={input}
          InputOnChange={InputOnChange}
          addTodo={addTodo}
          deleteAllTodos={deleteAllTodos}
        />
        <TodoList
          todos={todos}
          completed={completed}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
          editingIndex={editingIndex}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          updateTodo={updateTodo}
        />
        <TimerControls timer={timer} updateTimer={updateTimer} />
      </div>
    </>
  );
}

export default App;
