/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import "./stylesheets/TodoHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  allDoneVisible: boolean;
  isAllDone: boolean;
  onAllDoneClick: () => void;
  onEnterTodo: (todo: string) => void;
}

const TodoHeader: React.FunctionComponent<Props> = (props: Props) => {
  const onAllDoneClick = () => {
    props.onAllDoneClick();
  };

  const onEnterTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.currentTarget;
      const todo = target.value;
      target.value = "";
      props.onEnterTodo(todo);
    }
  };

  return (
    <div className="todo-header">
      <button
        className={`all-done-btn ${
          props.isAllDone ? "all-done-btn-active" : ""
        } ${props.allDoneVisible ? "all-done-disabled" : ""}`}
        onClick={onAllDoneClick}
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <input
        type="text"
        placeholder="What needs to be done?"
        onKeyPress={onEnterTodo}
      ></input>
    </div>
  );
};

export default TodoHeader;
