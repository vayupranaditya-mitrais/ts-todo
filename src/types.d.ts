interface Todo {
    id: number,
    task: string;
    isCompleted: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (taskId: number, task: string) => void;
type UpdateTodo = (selectedTodo: Todo) => void;
type RemoveTodo = (selectedTodo: Todo) => void;
type Toggle = () => void;
