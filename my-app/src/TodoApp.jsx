import { useEffect, useState } from "react";
import "./todoApp.css";
const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const storeToLocal = (key, value) => {
    if (!key) throw new Error("key is required");
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  const getFromLocal = (key) => {
    if (!key) throw new Error("key is required");
    let val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (!inputTodo) {
      alert("Please enter a todo");
      return;
    }
    let newTodo = [...todoList, inputTodo];
    setTodoList(newTodo);
    setInputTodo("");
    storeToLocal("todoList", newTodo);
  };

  const removeTodo = (index) => {
    let newTodoList = todoList.filter((item, i) => i != index);
    setTodoList(newTodoList);
    storeToLocal("todoList", newTodoList);
  };

  const handleInput = (event) => {
    let value = event.target.value;
    setInputTodo(value);
  };

  useEffect(() => {
    let val = getFromLocal("todoList");
    if (val) setTodoList(val);
  }, []);

  return (
    <div className="container">
      <h1 className="app_name">TODO App</h1>
      {/* input box */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todo_input"
          value={inputTodo}
          onChange={handleInput}
          className="input-1"
        />
        <div className="btn_container">
          <button className="save_btn">Save</button>
        </div>
      </form>

      <div className="todo_list">
        <ul>
          {todoList &&
            todoList.map((item, index) => {
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

export default TodoApp;
