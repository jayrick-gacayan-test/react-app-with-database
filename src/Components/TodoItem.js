import React from 'react';
import { db } from '../Firebase';
import { ref, child, remove, update } from 'firebase/database';
const TodoItem = ({ todo }) => {
    const deleteTodo = () => {
        const todoRef = child(ref(db, 'Todo'), todo.key);
        
        remove(todoRef)
    }
    
    const completeTodo = () => {
        const todoRef = child(ref(db, 'Todo'), todo.key);
        update(todoRef, { complete: !todo.complete });
    }
    return (
        <li>{ todo.title }{ " " + todo.complete }
            <button onClick={ deleteTodo }>Delete</button>
            <button onClick={ completeTodo }>Update Complete</button>
        </li>
    );
};

export default TodoItem;