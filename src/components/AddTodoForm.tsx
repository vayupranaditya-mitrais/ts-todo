import React from 'react';
import { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [task, setTask] = useState('');

    return (
        <form>
            <input
                type="text"
                value={task}
                onChange={(elem) => {
                    setTask(elem.target.value);
                }}
            />
            <button
                type="submit"
                onClick={(elem) => {
                    elem.preventDefault();
                    addTodo(task);
                    setTask('');
                }}
            >
                Add
            </button>
        </form>
    );
};