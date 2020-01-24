/**
 * Creating a Task Model (right now an interface, could be class later)
 */
export enum TaskStatus { 
  Pending = 'pending', 
  Active = 'active', 
  Finished = 'finished'
};

export interface CreateTaskDto {
  /* Purpose of this is to make sure the body of the createTask request has
   * title, description, and numPeople */
  title: string,
  description: string,
  numPeople: number,
}

export interface Task extends CreateTaskDto {
  id: number,
  status: TaskStatus,
}
