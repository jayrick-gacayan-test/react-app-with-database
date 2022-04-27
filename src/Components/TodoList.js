import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { ref, onValue } from 'firebase/database';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {
                const todoRef = ref(db, 'Todo');
                onValue(todoRef, (snapshot) => {
                    const todoList = [];
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val();
                        todoList.push({ key : childKey, ...childData });
                    });

                    setTodoList(todoList);
                });
            }
        ,[]
    );
    return (
        <div>
            {
                todoList.length > 0 ?
                todoList.map(
                    (todo) => {
                        return <TodoItem key={ todo.key }
                                        todo={ todo } />
                    }
                ) : 'No todo task yet.'
            }
            
        </div>
    );
};

export default TodoList;