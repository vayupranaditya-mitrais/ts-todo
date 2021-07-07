import React, { useState } from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItemNonEditable: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <>
            <label
                style={{textDecoration: todo.isCompleted ? 'line-through' : undefined}}
            >
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo)}
                /> {todo.task}
            </label>
        </>
    )
}
