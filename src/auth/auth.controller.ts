import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }
    @Post('signup')
    signUp(@Body() body: { email: string, password: string }) {
        return this.authService.signUp(body.email, body.password);
    }
    @Post('login')
    login(@Body() body: { email: string, password: string }) {
        return this.authService.login(body.email, body.password);
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Req() req) {
        return req.user;
    }

}