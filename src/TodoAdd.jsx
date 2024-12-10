import React, { useState } from "react";
import "./style.css";
import className from 'classnames';
function TodoAdd({ setTodos }) {
    const [inputValue, setInputValue] = useState("");
    const [isInvalid, setInvalid] = useState(false);

    const handleInputChange = (value) => {
        setInputValue(value);
        setInvalid(false);
    };
    const handleAddTodo = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            setTodos((prevTodos) => [
                ...prevTodos,
                { id: Date.now(), title: inputValue, completed: false },
            ]);
            setInputValue(""); 
            setInvalid(false);  
        }
        else {
            setInvalid(true); 
        }
    };

    const inputClass = className(`form-control mb-3`,{
        'is-invalid':isInvalid
    });
    return (
        <div className="my-3">
            <h6>Todo</h6>
            <input
                type="text"
                className={inputClass}
                placeholder="Your Todo..."
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
            />
            <button
                type="button"
                className={"btn border border-2 btn-sm cursor-pointer"}
                onClick={handleAddTodo}
            >
                Submit
            </button>
        </div>

    )
}

export default TodoAdd;