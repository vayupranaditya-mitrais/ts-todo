import React, { useState } from 'react';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { TodoListItemEditable } from './TodoListItemEditable';
import { TodoListItemNonEditable } from './TodoListItemNonEditable';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
    updateTodo: UpdateTodo;
    removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, updateTodo, removeTodo }) => {
    const [isEditing, setIsEditing] = useState(false);

    const child = (todo: Todo, toggleTodo: ToggleTodo): ReactElement => isEditing ? (
        <TodoListItemEditable
            todo={todo}
            updateTodo={updateTodo}
            toggleEditing={toggleEditing}
        />
    ) : (
        <TodoListItemNonEditable
            todo={todo}
            toggleTodo={toggleTodo}
        />
    )

    const showButtons = (todo: Todo): ReactElement => {
        if (isEditing) return <></>;
        if (!todo.isCompleted) {
            return (
                <>
                    <button
                        style={{
                            marginLeft: "10px",
                            backgroundColor: "orange"
                        }}
                        onClick={() => toggleEditing()}
                    >
                        <FontAwesomeIcon icon={ faPen } />
                    </button>
                    <button
                        style={{
                            backgroundColor: "tomato"
                        }}
                        onClick={() => removeTodo(todo)}
                    >
                        <FontAwesomeIcon icon={ faTrash } />
                    </button>
                </>
            )
        }
        return (
            <>
                <button
                    style={{
                        marginLeft: "10px",
                        backgroundColor: "tomato"
                    }}
                    onClick={() => removeTodo(todo)}
                >
                    <FontAwesomeIcon icon={ faTrash } />
                </button>
            </>
        )
    }

    const toggleEditing = (): void => {
        setIsEditing(!isEditing);
    }

    return (
        <li>
            {child(todo, toggleTodo)}
            {showButtons(todo)}
        </li>
    )
}
