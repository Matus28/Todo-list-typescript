"use strict";

import React, { ChangeEvent, useState, useRef } from "react";
import "./style.css";

interface Props {
  handleAdd: (enteredText: string) => void;
}

// ==> Another option to define type
// const TaskInput: React.FC<Props> = ({todo, setEnteredValue}) => {
const TaskInput = ({ handleAdd }: Props) => {
  const [todo, setTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const todoInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleAdd(todo);
    setTodo("");
    inputRef.current?.blur();
  };

  return (
    <form className="task-input" onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a new task"
        className="task-input__box"
        value={todo}
        onChange={todoInputChangeHandler}
      />
      <button className="task-input__submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default TaskInput;
