import {

    IsString,
    MinLength

} from 'class-validator'


export class createTasksDto {
    @IsString()
    @MinLength(1)
    title: string;
    @IsString()
    @MinLength(1)
    description: string;
}