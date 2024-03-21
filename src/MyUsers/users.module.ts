
import { Module } from '@nestjs/common';
import { userController } from './users.controller';
import { UserService } from './users.services';
import { UserSchema } from './User.model'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{name:'popco',schema:UserSchema}])],
  controllers: [userController],
  providers: [UserService],
})
export class UsersModule {}
