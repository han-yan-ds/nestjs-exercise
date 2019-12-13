import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({  // decorator factory that returns a custom decorator with controllers passed in
  controllers: [TasksController], 
  providers: [TasksService] // what controllers to import?
})
export class TasksModule {}
