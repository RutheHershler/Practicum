
import { Module } from '@nestjs/common';
import { AppController } from './user.controller';
import { UserService } from './user.service';
import { User,UserSchema } from './user.schema'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{name:'popco',schema:UserSchema}])],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
