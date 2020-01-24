/**
 * Creating a Task Model (right now an interface, could be class later)
 */
export enum TaskStatus { 
  Pending = 'pending', 
  Active = 'active', 
  Finished = 'finished'
};

export interface Task {
  id: number,
  title: string,
  description: string,
  numPeople: number,
  status: TaskStatus,
}