import {

    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MinLength,
    Max,

} from 'class-validator';


export class CreateUserDto{

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    password: string
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()

    ege: number


}

