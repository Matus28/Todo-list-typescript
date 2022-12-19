"use strict";

import React, { ChangeEvent } from "react";

import "./TaskInput.css";

interface Props {
  todo: string;
  setEnteredValue: (enteredText: string) => void;
}

// const TaskInput: React.FC<Props> = ({todo, setTodo}) => {
const TaskInput = ({ todo, setEnteredValue }: Props) => {
  const todoInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  return (
    <form className="task-input">
      <input
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
