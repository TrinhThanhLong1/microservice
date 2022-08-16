import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import CreateUserDto from './dto/user.create.dto';
import { User_Request } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @MessagePattern({ cmd: 'get_analytics' })
    getAnalytics(): Object {
        return new User_Request('long', 'acv')
    }
}

