import { Injectable, UnauthorizedException } from '@nestjs/common';
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
        const user = new this.userModel({ email, password: hash });
        return user.save();

    }
    async login(email: string, password: string) {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
