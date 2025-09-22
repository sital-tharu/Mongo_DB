import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel:
        Model<UserDocument>, private jwtService: JwtService) {

    }
    async signUp(email: string, password: string) {
        const hash = await bcrypt.hash(password, 10);

    }


}
