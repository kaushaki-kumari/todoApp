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
        if (editingId) {
            setInvalid(false);
        }
    }, [editingId, inputValue]);

    const handleAddTodo = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue) {
            if (editingId) {
                setTodos((prevTodos) =>
                    prevTodos.map((todo) =>
                        todo.id === editingId ? { ...todo, title: trimmedValue } : todo));
                setEditingId(null)
                setInvalid(false);
            }
            else {
                setTodos((prevTodos) => [
                    ...prevTodos,
                    { id: Date.now(), title: inputValue, completed: false },
                ]);
                setInvalid(false);
            }
            setInputValue("");
        }
        else {
            setInvalid(true);
        }
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
            if(isInvalid){
                setInvalid(false)
            }
        } 

    const inputClass = className(`form-control mb-3`, {
        'is-invalid': isInvalid
    })
   
    return (
        <div className="my-3">
            <h6>Todo</h6>
            <input
                type="text"
                className={inputClass}
                placeholder="Your Todo..."
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef}
                style={{
                    outline: "none", 
                    boxShadow: "none", 
                }}
            />
            <button
                type="button"
                className={"btn border btn-sm cursor-pointer"}
                onClick={handleAddTodo}
            >
                 {editingId ? "Edit" : "Submit"}    
            </button>
        </div>

    )
}

export default AddTodo;