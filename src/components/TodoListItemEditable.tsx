import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'


interface Props {
    todo: Todo;
    updateTodo: UpdateTodo;
    toggleEditing: Toggle;
}

export const TodoListItemEditable: React.FC<Props> = ({ todo, updateTodo, toggleEditing }) => {
    const [task, setTask] = useState(todo.task);
    return (
        <>
            <input
                type="text"
                value={task}
                onChange={(elem) => setTask(elem.target.value)}
            />
            <button
                style={{
                    marginLeft: "10px",
                    backgroundColor: "lawngreen"
                }}
                onClick={() => {
                    if (task.length == 0) {
                        window.alert('Task can not be empty');
                        return;
                    }
                    updateTodo({
                        ...todo,
                        task: task
                    });
                    toggleEditing();
                }}
            >
                <FontAwesomeIcon icon={ faCheck } />
            </button>
            <button
                style={{
                    backgroundColor: "tomato"
                }}
                onClick={() => {
                    toggleEditing();
                }}
            >
                <FontAwesomeIcon icon={ faTimes } />
            </button>
        </>
    );
}
