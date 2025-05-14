import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
tasksService: TasksService;
    constructor(tasksService:TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query)

        return this.tasksService.getTasks();   
    }

      @Get('/:id')
        getTask(@Param('id') id: string) {
            console.log(id)

        return this.tasksService.getTask(parseInt(id));   
    }

    
    @Post()
    createTasks(@Body() task: createTasksDto){
       
        return this.tasksService.CreateTasks(task)
    }
    
    @Put ()
    updateTasks() {
        return this.tasksService.updateTasks;
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
