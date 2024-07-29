import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const log = (value) => {
    setInputText(value);
  };

  const handlerClick = () => {
    if (editIndex === -1) {
      // Add new todo
      setTodos([...todos, inputText]);
    } else {
      // Update existing todo
      const newTodos = [...todos];
      newTodos[editIndex] = editText;
      setTodos(newTodos);
      setEditIndex(-1); // Reset edit mode
    }
    setInputText(""); // Clear input field
    setEditText(""); // Clear edit text
  };

  const removeElement = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editElement = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={(event) => log(event.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handlerClick}>
        {editIndex === -1 ? "Add" : "Update"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input
                type="text"
                value={editText}
                onChange={(event) => setEditText(event.target.value)}
              />
            ) : (
              todo
            )}
            <button onClick={() => editElement(index)}>Edit</button>
            <button onClick={() => removeElement(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;