import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const TodoItem = ({
  todo,
  completed,
  onDelete,
  onEdit,
  onToggleComplete,
  isEditing,
  editedTodo,
  setEditedTodo,
  onSave,
}) => {
  const handleInputChange = (e) => {
    setEditedTodo(e.target.value);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editedTodo} onChange={handleInputChange} />
          <button onClick={onSave}>
            <SaveOutlined />
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggleComplete}
          />
          <span style={{ textDecoration: completed ? "line-through" : "none" }}>
            {todo}
          </span>
          <button onClick={onEdit}>
            <EditOutlined />
          </button>
        </>
      )}
      <button onClick={onDelete}>
        <DeleteOutlined />
      </button>
    </li>
  );
};

export default TodoItem;
