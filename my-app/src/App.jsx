import { useState } from "react";
import "./App.css";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, inputTodo]);
    setInputTodo("");
  };

  const removeTodo = (index) => {
    let newTodoList = todoList.filter((item, i) => i != index);
    setTodoList(newTodoList);
  };

  const handleInput = (event) => {
    let value = event.target.value;
    setInputTodo(value);
  };

  return (
    <div className="container">
      <h1 className="app_name">TODO App</h1>
      {/* input box */}
      <input
        type="text"
        name="todo_input"
        value={inputTodo}
        onChange={handleInput}
        className="input-1"
      />
      <div className="btn_container">
        <button className="save_btn" onClick={addTodo}>
          Save
        </button>
      </div>

      <div className="todo_list">
        <ul>
          {todoList.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
