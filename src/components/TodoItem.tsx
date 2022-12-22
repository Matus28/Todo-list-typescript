"use strict";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditMode = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTodo(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos-item"
      onSubmit={(e: React.FormEvent) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          className="todos-item__text"
          ref={inputRef}
          value={editTodo}
          onChange={handleOnChange}
        />
      ) : todo.isDone ? (
        <s className="todos-item__text">{todo.todo}</s>
      ) : (
        <span className="todos-item__text">{todo.todo}</span>
      )}
      <div>
        <span className="icon" onClick={handleEditMode}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoItem;
