import React from "react";
import "./stylesheets/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
  isDone: boolean;
  children: string;
  onDeleteTodo: (todoId: string) => void;
  onDoneTodo: (todoId: string) => void;
}

const TodoItem: React.FunctionComponent<Props> = (props: Props) => {
  const onDoneTodo = () => {
    props.onDoneTodo(props.id);
  };

  const onDeleteTodo = () => {
    props.onDeleteTodo(props.id);
  };

  return (
    <div className="todo-item">
      <div className="check-btn-wrapper">
        <button
          className={`check-btn ${props.isDone ? "check-btn-done" : ""}`}
          onClick={onDoneTodo}
        >
          <FontAwesomeIcon
            icon={faCheck}
            className={props.isDone ? "visible" : "invisible"}
          />
        </button>
      </div>
      <div className="todo-name-wrapper">
        <p className={`todo-name ${props.isDone ? "todo-name-done" : ""}`}>
          {props.children}
        </p>
      </div>
      <div>
        <button className="delete-btn" onClick={onDeleteTodo}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
