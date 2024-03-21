import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
    private users: User[] = [];

    // inserUser(userID:string,email:string,age:number){
    //     const userID=
    // }
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async getUsers(userID: string): Promise<User[]> {
        return this.userModel.find({ userID });
    }
    async createUser(user: User): Promise<User> {
        const createdUser = new this.userModel({
            name: "name1",
            email: "email1",
            age: 1,
        });
    const result= await createdUser.save();
     return result;
    }
}