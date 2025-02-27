import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './model/task';

@Injectable()
export class TaskService {
    private tasks: Task[] = [{id:1,title:"harry potter",is_finished:false}];
    
    getAllTasks(): Task[] {
        return this.tasks
    }

    createTask(task : Task) : Task[]{
        this.tasks.push(task);
        return this.tasks;
    }

    updateTask(id: number, updatedTask: Partial<Task>) : Task {
        const taskIndex = this.tasks.findIndex(task=> task.id === id );
        if (taskIndex === -1){
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask};
        return this.tasks[taskIndex];
    }

    deleteTask(id: number): Task[] {
        const taskIndex = this.tasks.findIndex(task=> task.id === id);
        if (taskIndex === -1) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        this.tasks.splice(taskIndex, 1);
        return this.tasks;
    }
}
