import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks') // decorator factory that returns a custom decorator
export class TasksController {
  constructor(private tasksService: TasksService) {
    
  }
}
