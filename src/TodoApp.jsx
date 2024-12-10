import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import  { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, title: "abc",completed: false },
        { id: 2, title: "xyz",completed: false},
    ]);

    return (
        <>
        <TodoList todos={todos} setTodos={setTodos}/>
           <AddTodo setTodos={setTodos} />
        </>
    );
}

export default TodoApp;    