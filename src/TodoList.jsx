import React from "react";
import TodoAdd from "./TodoAdd";
import TodoListItem from "./TodoListItem";
import  { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: "abc",completed: false },
        { id: 2, title: "xyz",completed: false},
    ]);

    return (
        <>
        <TodoListItem  todos={todos} setTodos={setTodos}/>
           <TodoAdd setTodos={setTodos} />
        </>
    );
}

export default TodoList;    