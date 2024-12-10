import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import className from 'classnames';

function AddTodo({ setTodos, inputValue, setInputValue, editingId, setEditingId }) {
    const [isInvalid, setInvalid] = useState(false);
    const inputRef = useRef(null)

    useEffect(() => {
        if (editingId || inputValue === "") {
            inputRef.current.focus();
        }
    }, [editingId]);

    const handleAddTodo = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            if (editingId) {
                setTodos((prevTodos) =>
                    prevTodos.map((todo) =>
                        todo.id === editingId ? { ...todo, title: trimmedValue } : todo));
                setEditingId(null)
            }
            else {
                setTodos((prevTodos) => [
                    ...prevTodos,
                    { id: Date.now(), title: inputValue, completed: false },
                ]);
            }
            setInputValue("");
            setInvalid(false);
        }
        else {
            setInvalid(true);
        }
    };

    const inputClass = className(`form-control mb-3`, {
        'is-invalid': isInvalid
    });
    return (
        <div className="my-3">
            <h6>Todo</h6>
            <input
                type="text"
                className={inputClass}
                placeholder="Your Todo..."
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                ref={inputRef}
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

export default AddTodo;