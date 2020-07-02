import React, { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";
import "./stylesheets/Todos.css";
import { generate } from "shortid";

interface TodoItem {
  id: string;
  name: string;
  isDone: boolean;
}

const Todos: React.FunctionComponent = () => {
  const [itemList, setItemList] = useState<TodoItem[]>([]);
  const [isAllDone, setAllDone] = useState<boolean>(false);
  const [itemsLeft, setItemsLeft] = useState<number>(0);
  const [filter, setFilter] = useState<string>("All");

  const onAllDoneClick = () => {
    setAllDone(!isAllDone);
    const newItemList: TodoItem[] = itemList.map((todo: TodoItem) => {
      todo.isDone = isAllDone;
      return todo;
    });
    setItemList(newItemList);
  };

  const onEnterTodo = (todo: string) => {
    const todoItem: TodoItem = {
      id: generate(),
      name: todo,
      isDone: false,
    };
    const newItemList: TodoItem[] = [...itemList, todoItem];
    setItemList(newItemList);
  };

  const onDoneTodo = (todoId: string) => {};

  const onDeleteTodo = (todoId: string) => {
    const newItemList: TodoItem[] = itemList.filter(
      (todo: TodoItem) => todo.id != todoId
    );
    setItemList(newItemList);
  };

  const updateItemsLeft = () => {
    setItemsLeft(itemList.filter((todo: TodoItem) => !todo.isDone).length);
  };

  const itemListElements = itemList.map((todo: TodoItem) => (
    <TodoItem
      id={todo.id}
      isDone={todo.isDone}
      key={todo.id}
      onDoneTodo={(todoId: string) => {
        onDoneTodo(todoId);
      }}
      onDeleteTodo={(todoId: string) => {
        onDeleteTodo(todoId);
      }}
    >
      {todo.name}
    </TodoItem>
  ));

  return (
    <div className="todos">
      <TodoHeader
        allDoneVisible={itemList.length === 0}
        isAllDone={isAllDone}
        onAllDoneClick={onAllDoneClick}
        onEnterTodo={(todo) => {
          onEnterTodo(todo);
        }}
      />
      <ul>{itemListElements}</ul>
      <FilterBar />
    </div>
  );
};

export default Todos;
