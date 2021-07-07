import { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    task: 'Prepare data TA',
    isCompleted: true
  },
  {
    task: 'Nulis laporan',
    isCompleted: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,  // All other attributes
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (task: string) => {
    const newTodo = { task, isCompleted: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
      />
      <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;
