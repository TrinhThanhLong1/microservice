import { Controller, Get, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User_Request } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getHello() {
        let a = await this.userService.getHello().toPromise();
        console.log(a.name);
        return a
    }





} 
