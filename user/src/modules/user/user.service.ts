import { Injectable } from '@nestjs/common';
import console from 'console';

@Injectable()
export class UserService {

    getHello() {
        console.log('data')
        return 'userClient connecttion';
    }
}
