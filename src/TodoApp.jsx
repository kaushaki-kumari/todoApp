import  { useState } from "react";
import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, title: "abc",completed: false },
        { id: 2, title: "xyz",completed: false},
    ]);

    const [inputState, setInputState] = useState({
        inputValue: "",
        editingId: null,
    });

    const setInputValue = (newInputValue) => {
        setInputState((prevState) => ({
            ...prevState,
            inputValue: newInputValue,
        }));
    };

    const setEditingId = (newEditingId) => {
        setInputState((prevState) => ({
            ...prevState,
            editingId: newEditingId,
        }));
    };
    return (
        <>
              <TodoList
                todos={todos}
                setTodos={setTodos}
                setInputValue={setInputValue}
                setEditingId={setEditingId} 
            />
             <AddTodo
              todos={todos}
              setTodos={setTodos}
              inputValue={inputState.inputValue}
              setInputValue={setInputValue}
              editingId={inputState.editingId}
              setEditingId={setEditingId}
            /> 
        </>
    );
}

export default TodoApp;    