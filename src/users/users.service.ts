import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDto } from 'src/tasks/dto/create-users.dto';

@Injectable()
export class UsersService {

    private users: any[] = [

        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        }
    ];
    getUsers() {
        return this.users;
    }


    createUser(user: CreateUserDto){

        this.users.push(user);
        return{
            ...user,
            id:this.users.length +1,
        };

    } 
}