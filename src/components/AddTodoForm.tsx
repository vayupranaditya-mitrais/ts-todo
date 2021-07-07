import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [task, setTask] = useState('');

    return (
        <form>
            <input
                type="text"
                placeholder="New task"
                value={task}
                onChange={(elem) => {
                    setTask(elem.target.value);
                }}
            />
            <button
                type="submit"
                style={{
                    marginLeft: "10px",
                    backgroundColor: "lawngreen"
                }}
                onClick={(elem) => {
                    elem.preventDefault();
                    let taskId: number = new Date().getTime();
                    addTodo(taskId, task);
                    setTask('');
                }}
            >
                <FontAwesomeIcon icon={ faPlus } /> Add
            </button>
        </form>
    );
};