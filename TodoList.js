import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  completed,
  deleteTodo,
  editTodo,
  toggleComplete,
  editingIndex,
  editedTodo,
  setEditedTodo,
  updateTodo,
}) => {
  return (
    <div className="input">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          completed={completed[index]}
          onDelete={() => deleteTodo(index)}
          onEdit={() => editTodo(index)}
          onToggleComplete={() => toggleComplete(index)}
          isEditing={editingIndex === index}
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          onSave={() => updateTodo(index, editedTodo)}
        />
      ))}
    </div>
  );
};

export default TodoList;
