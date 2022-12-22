"use strict";

import React, { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const currentTodo: Todo = {
      id: Date.now(),
      todo: enteredText,
      isDone: false,
    };

    setTodos([...todos, currentTodo]);
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Todo list</span>
      <TaskInput handleAdd={addTodoHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
