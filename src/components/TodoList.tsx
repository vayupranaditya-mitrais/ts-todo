import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    updateTodo: UpdateTodo;
    removeTodo: RemoveTodo;
    checkAll: Toggle;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, updateTodo, removeTodo, checkAll }) => {
    return (
        <ul style={{listStyleType: "none"}}>
            {todos.length > 0 ? (
                <li>
                    <button
                        style={{
                            backgroundColor: "lawngreen"
                        }}
                        onClick={() => checkAll()}
                    >
                        <FontAwesomeIcon icon={ faCheck } /> Check All
                    </button>
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
