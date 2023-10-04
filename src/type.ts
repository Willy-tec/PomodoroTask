export interface Task{
    id: number;
    description: string;
    done: boolean;
}
export interface TaskList{
    lastId: number;
    tasks: Task[];
}