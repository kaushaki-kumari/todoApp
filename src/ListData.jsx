import React from "react";

function ListData({ todos, setTodos }) {
    const checkboxChecked = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <span className="custom-checkbox">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => checkboxChecked(todo.id)}
                        />
                        <span className="ms-2">{todo.title}</span>
                    </span>
                    {todo.completed && (
                        <span className="badge bg-secondary rounded-pill fw-bolder">
                            Completed
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default ListData;
