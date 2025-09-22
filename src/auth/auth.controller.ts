import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    @Post('signup')
    signUp(@Body() body: { email: string, password: string }) {
        return this.authService.signUp(body.email, body.password);
    }
}
