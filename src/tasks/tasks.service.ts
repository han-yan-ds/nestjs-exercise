/**
 * A service is the "Model" in MVC (eg: it calls CRUD operations to the database)
 */

import { Injectable, Get } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private tasksArr: Task[] = []; // temporary, will eventually be in database instead
  private id = 0;

  getAllTasks(): Task[] {
    return this.tasksArr;
  }

  createTask(title: string, description: string, numPeople: number): void {
    const task: Task = {
      id: this.id,
      title,
      description,
      numPeople,
      status: TaskStatus.Pending
    }
    this.tasksArr.push(task);
    this.id++;
  }
}
