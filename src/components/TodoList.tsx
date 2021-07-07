import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    updateTodo: UpdateTodo;
    removeTodo: RemoveTodo;
    checkAll: Toggle;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, updateTodo, removeTodo, checkAll }) => {
    return (
        <ul>
            {todos.length > 0 ? (
                <li style={{listStyleType: "none"}}>
                    <button onClick={() => checkAll()}>Check All</button>
                </li>
            ) : <></>}
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoListItem
                        todo={todo}
                        toggleTodo={toggleTodo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                </div>
            ))}
        </ul>
    )
}
