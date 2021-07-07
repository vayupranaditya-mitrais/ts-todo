import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    updateTodo: UpdateTodo;
    removeTodo: RemoveTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, updateTodo, removeTodo }) => {
    return (
        <ul>
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
