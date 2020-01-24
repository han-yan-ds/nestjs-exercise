/**
 * A service is the "Model" in MVC (eg: it calls CRUD operations to the database)
 */

import { Injectable, Get } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasksArr: Task[] = []; // temporary, will eventually be in database instead

  getAllTasks(): Task[] {
    return this.tasksArr;
  }
}
