/**
 * A service is the "Model" in MVC (eg: it calls CRUD operations to the database)
 */

import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, CreateTaskDto } from './tasks.model';
import * as uuid from 'uuid';

@Injectable()
export class TasksService {
  private tasksArr: Task[] = []; // temporary, will eventually be in database instead

  getAllTasks(): Task[] {
    return this.tasksArr;
  }
  
  getOneTaskById(id: string): Task {
    return this.tasksArr.find((task: Task) => task.id === id);
  }

  createTask(createTaskBody: CreateTaskDto): Task {
    const task: Task = {
      ...createTaskBody,
      id: uuid(),
      status: TaskStatus.Pending
    }
    this.tasksArr.push(task);
    return task; 
    /* good practice to return at end of Create because 
     * the FrontEndDevs can get this task right away, 
     * as opposed to having to make another call for ALL tasks just to get this new task */
  }

  deleteOneTaskById(id: string): Task {
    const foundTaskIndex = this.tasksArr.findIndex((task: Task) => task.id === id);
    const deletedTask = this.tasksArr[foundTaskIndex];
    this.tasksArr.splice(foundTaskIndex, 1);
    return deletedTask;
  }

  updateOneTaskStatus(id: string, newStatus: TaskStatus): Task {
    const foundTask = this.getOneTaskById(id);
    foundTask.status = newStatus;
    return foundTask;
  }

  replaceOneTask(id: string, createTaskBody: CreateTaskDto): Task {
    const foundTaskIndex = this.tasksArr.findIndex((task: Task) => task.id === id);
    this.tasksArr[foundTaskIndex] = {...this.tasksArr[foundTaskIndex], ...createTaskBody}; // using destructuring to replace some key/values after assigning
    return this.tasksArr[foundTaskIndex];
  }
}
