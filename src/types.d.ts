interface Todo {
    task: string;
    isCompleted: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (task: string) => void;
