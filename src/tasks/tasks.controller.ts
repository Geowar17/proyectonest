import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
tasksService: TasksService;
    constructor(tasksService:TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks() {

        return this.tasksService.getTasks();   
    }
    
    @Post()
    createTasks(@Body() body: any){
        return this.tasksService.CreateTasks()
    }
    
    @Put ()
    updateTasks() {
        return this.tasksService.CreateTasks();
    }

    @Delete ()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }
    @Patch ()
    undateTasksStatus() {
        return this.tasksService.undateTaskStatus();
    }
}
