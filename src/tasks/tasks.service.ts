/**
 * A service is the "Model" in MVC (eg: it calls CRUD operations to the database)
 */

import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasksArr = ['This Works!']; // temporary, will eventually be in database instead

  getAllTasks() {
    return this.tasksArr;
  }
}
