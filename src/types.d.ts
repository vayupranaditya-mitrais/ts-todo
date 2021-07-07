interface Todo {
    id: number,
    task: string;
    isCompleted: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (taskId: number, task: string) => void;
