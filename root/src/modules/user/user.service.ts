import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER') private readonly userclient: ClientProxy,
    ) { }
    getHello() {
        return this.userclient.send({ cmd: 'get_analytics' }, {})
    }
}
