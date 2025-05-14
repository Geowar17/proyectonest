import { Injectable } from "@nestjs/common";

export interface User {
    name: string;
    age: Number;
}


@Injectable()

export class TasksService {

    getTasks(): User {

        return{
            name:'geo luce',
            age: 40

        } 
    }
    CreateTasks() {

        return ' creando tarea'

    }
    updateTasks() {

        return ' ACTUALIZANDO TAREA'

    }

    deleteTasks() {

        return ' eliminando tarea'
    }

    undateTaskStatus() {

        return 'actualizando el estado de la tarea'

    }
}