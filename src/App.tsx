"use strict";

import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const values: Todo = {
      id: 0,
      todo: enteredText,
      isDone: false,
    };

    setTodos([...todos, values]);
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Todo list</span>
      <TaskInput handleAdd={addTodoHandler} />
    </div>
  );
};

export default App;
