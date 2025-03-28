import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos, setTodos , setInputValue, setEditingId   }) {

    return (
        <ul className="list-group">
            {todos.map((todo) => (
               <TodoItem
               key={todo.id}
               todos={todo}
               setTodos={setTodos}
               setInputValue={setInputValue}
               setEditingId={setEditingId}
           />
            ))}
        </ul>
    );
}

export default TodoList;
