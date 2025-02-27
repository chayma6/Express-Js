import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './model/task';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create')
    createTask(@Body() task : Task) : Task[]{
      return this.taskService.createTask(task);
    }

  @Get('/all')
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Patch('/update/:id')
  updateTask(@Param('id') id:string, @Body() updateTask: Partial<Task>):Task {
    return this.taskService.updateTask(Number(id), updateTask);
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id') id: string): Task[]{
    return this.taskService.deleteTask(Number(id));
  }
}
