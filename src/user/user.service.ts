import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createUser() : Promise<User> {
        const user = new this.userModel({
            name : 'Sital tharu',
            address : {
                street : '123',
                city : 'kathmandu'
            }
        })
        return user.save();
    }

    async findAll() : Promise<User[]>{
        return this.userModel.find().exec();
    }
}
