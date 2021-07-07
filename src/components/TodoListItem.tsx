import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label
                style={{textDecoration: todo.isCompleted ? 'line-through' : undefined}}
            >
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo)}
                /> {todo.task}
            </label>
        </li>
    )
}
