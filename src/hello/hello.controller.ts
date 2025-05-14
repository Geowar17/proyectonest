import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';


@Controller()
export class HelloController {


@Get('/')
index(@Req() request: Request, @Res() response: Response) {

        response.status(200).json({
            message: 'hello world'
        });
    }

}