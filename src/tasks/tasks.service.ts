import { Injectable, NotFoundException } from "@nestjs/common";
import { createTasksDto } from "./dto/create-tasks.dto";
import { updateTasksDto } from "./dto/update-tasks.dto";

export interface User {
    name: string;
    age: Number;
}


@Injectable()

export class TasksService {

    private tasks: any[] = []

    getTasks() {

        return this.tasks
    }

getTask(id:number) {

    const taskFound= this.tasks.find(task => task.id===id)
        if (!taskFound){
            return new NotFoundException(`Task with id ${id} not found`)
        }

        return taskFound
    }



    CreateTasks(task: createTasksDto) {
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length +1,
        })
        return task

    }
    updateTasks(task: updateTasksDto) {

        return ' ACTUALIZANDO TAREA'

    }

    deleteTasks() {

        return ' eliminando tarea'
    }

    undateTaskStatus() {

        return 'actualizando el estado de la tarea'

    }
}