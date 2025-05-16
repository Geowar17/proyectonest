import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/tasks/dto/create-users.dto';

@Controller('/users')
export class UsersController {

    constructor (private usersService: UsersService) {}

    @Get()
    getUsers() {
      return this.usersService.getUsers()
    }

    @Post()

      CreateUser(@Body() user: CreateUserDto){
      return this.usersService.createUser(user)

    
    }

}

    