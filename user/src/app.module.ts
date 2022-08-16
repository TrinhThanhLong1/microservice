import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/users'),],
  controllers: [],
  providers: [],
})
export class AppModule { }
