import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './MyUsers/users.module';
import { MongooseModule } from '@nestjs/mongoose';

// import { User } from "./database/user.model";

@Module({

  imports: [UsersModule,MongooseModule.forRoot('mongodb+srv://6967460:<password>@cluster0.8t0f9rv.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
