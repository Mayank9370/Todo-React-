import { useContext, useState } from "react";
import TodoDispatchContext from "../../contex/TodoDispatchContext";
import "./AddTodo.css";

function AddTodo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);

  return (
    <div className="add-todo-wrapper">
      <div className="add-todo-container">
        <input
          type="text"
          placeholder="Enter Here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch({ type: "add_type", payload: { todoText: inputText } });
            setInputText("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
