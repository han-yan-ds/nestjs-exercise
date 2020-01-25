/**
 * A Controller is the routing logic of a server... it routes endpoints to providers
 */

import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, CreateTaskDto } from './tasks.model';

@Controller('tasks') // decorator factory that returns a custom decorator
export class TasksController {

  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  /* In controllers, the REST/CRUD decorators (aka @Get, @Post) are 
  * the ones that tell the controller which methods to route to BASED ON
  * the HTTP request type */
  @Get() 
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks(); // Calls the method in tasksService class which was imported
  }

  /* This is an example of a REST/CRUD decorator taking an argument 
   * (endpoint parameter, in this case)
   * ALSO, notice the @Param in the arguments
   */
  @Get('/:id')
  getOneTaskById(@Param('id') id: string): Task {
    return this.tasksService.getOneTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskBody: CreateTaskDto):Task {
    return this.tasksService.createTask(createTaskBody);
  }

  @Delete('/:id')
  deleteOneTaskById(@Param('id') id: string): Task {
    return this.tasksService.deleteOneTaskById(id);
  }
}
