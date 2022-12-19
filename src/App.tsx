"use strict";

import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const addTodoHandler = (enteredText: string) => {
    setTodo(enteredText);
    console.log(enteredText);
  };
  return (
    <div className="App">
      <span className="heading">Todo list</span>
      <TaskInput todo={todo} setEnteredValue={addTodoHandler} />
    </div>
  );
};

export default App;
