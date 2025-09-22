import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt"
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor (configService : ConfigService)
    {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET') 
        });
    }

    async validate(payLoad:any) {
        return { userId: payLoad.sub, email: payLoad.email};
    }
}