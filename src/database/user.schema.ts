import * as mongoose from 'mongoose';
import { Document } from 'mongoose';


export const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});


export class User {
    name: string;
    email: string;
    age: number;
}