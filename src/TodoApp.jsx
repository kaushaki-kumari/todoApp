import  { useState } from "react";
import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, title: "abc",completed: false },
        { id: 2, title: "xyz",completed: false},
    ]);

    const [inputValue, setInputValue] = useState(""); 
    const [editingId, setEditingId] = useState(null);
    return (
        <>
              <TodoList
                todos={todos}
                setTodos={setTodos}
                setInputValue={setInputValue}
                setEditingId={setEditingId} 
            />
             <AddTodo
                setTodos={setTodos}
                inputValue={inputValue}
                setInputValue={setInputValue}
                editingId={editingId}
                setEditingId={setEditingId}
            /> 
        </>
    );
}

export default TodoApp;    