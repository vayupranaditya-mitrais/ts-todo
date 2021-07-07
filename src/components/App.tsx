import { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    id: 1,
    task: 'Prepare data TA',
    isCompleted: true
  },
  {
    id: 2,
    task: 'Nulis laporan',
    isCompleted: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,  // All other attributes
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (taskId: number, task: string) => {
    const newTodo = {
      id: taskId,
      task,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  }

  const updateTodo: UpdateTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo.id === selectedTodo.id) {
        let x = {
          ...todo,  // All other attributes
          task: selectedTodo.task,
        };
        return x;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
      <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
