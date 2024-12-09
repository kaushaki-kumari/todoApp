import React, { useState } from "react";
function TodoAdd({ setTodos }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleAddTodo = () => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), title: inputValue, completed: false },
        ]);
        setInputValue("");
    };
    return (
        <div className="my-3">
            <h6>Todo</h6>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Todo..."
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
            />
            <button
                type="button"
                className="btn border border-2 btn-sm"
                onClick={handleAddTodo}
            >
                Submit
            </button>
        </div>

    )
}

export default TodoAdd;