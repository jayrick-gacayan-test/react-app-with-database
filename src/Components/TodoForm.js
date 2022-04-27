import React, { useState } from "react";
import { db } from '../Firebase';
import { ref, push } from 'firebase/database';

const TodoForm = () => {
    const [ title, setTitle ] = useState('');
    const handleOnChange = (event) =>{
        setTitle(event.target.value);
    }

    const createTodo = () => {
        
        const todoRef = ref(db, 'Todo');
        const todo = {
            title,
            complete: false,
        };
        
        push(todoRef, todo);

        setTitle('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!title.trim()) return;

        createTodo();
    }

    return (
        <div>
            <form onSubmit={ handleSubmit } >
                <input  type="text"
                        id="title"
                        name="title"
                        value={ title } 
                        onChange={ handleOnChange } />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;