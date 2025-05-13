import { Injectable } from "@nestjs/common";

@Injectable()

export class TasksService {

    getTasks() {

        return[ 'Tasks 1', 'Tasks 2', 'Tasks 3']
    }
}