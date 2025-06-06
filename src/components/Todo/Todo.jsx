import { useState } from "react";
import "./Todo.css"; // Import the CSS file

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: finished ? "line-through" : "none" }}>
          {todoData}
        </span>
      )}
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          if (isEditing) {
            onEdit(editText); // Save edited text
          }
        }}
      >
        {!isEditing ? "Edit" : "Save"}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
