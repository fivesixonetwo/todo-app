import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";

import React, { useState } from "react";

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const handleInput = (value) => {
    let result = [...data, value];
    localStorage.setItem('todos', JSON.stringify(result));
    setData(result);
  };

  const handleTodoToggle = (id) => {
    let result = [...data];
    result[id].isComplete = !result[id].isComplete;
    localStorage.setItem('todos', JSON.stringify(result));
    setData(result);
  };

  const handleRemoveTodo = (id) => {
    let result = [...data].filter((item, index) => id !== index);
    localStorage.setItem('todos', JSON.stringify(result));
    setData(result);
  };

  return (
    <div className="App">
      <Header />
      <Input handleInput={handleInput} />
      <Todos
        handleRemoveTodo={handleRemoveTodo}
        handleTodoToggle={handleTodoToggle}
        data={data}
      />
    </div>
  );
}

export default App;
