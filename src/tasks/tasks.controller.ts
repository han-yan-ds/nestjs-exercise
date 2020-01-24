/**
 * A Controller is the routing logic of a server... it routes endpoints to providers
 */

import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks') // decorator factory that returns a custom decorator
export class TasksController {

  tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  
}
