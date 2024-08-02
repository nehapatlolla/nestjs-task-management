export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
export enum TaskStatus {
  OPEN = 'Open',
  In_progress = 'In_progress',
  Done = 'Done',
}
