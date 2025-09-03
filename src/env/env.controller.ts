import { Controller, Get } from '@nestjs/common';
import { EnvService } from './env.service';

@Controller('env')
export class EnvController {
    constructor(private evService: EnvService){

    }
    @Get()
    getUrl(){
    return this.evService.getDbUrl();
}
}