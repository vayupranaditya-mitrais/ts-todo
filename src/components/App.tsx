import { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    id: 1,
    task: 'Example task',
    isCompleted: false
  },
  {
    id: 2,
    task: 'Example completed task',
    isCompleted: true
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
    if (task.length === 0) {
      window.alert('Task cannot be empty');
      return;
    }
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

  const removeTodo: RemoveTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter(todo => todo.id !== selectedTodo.id);
    setTodos(newTodos);
  }

  const checkAll: Toggle = () => {
    const newTodos = todos.map(todo => {
      todo.isCompleted = true;
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <>
      <h1>To Do List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        checkAll={checkAll}
      />
      <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
