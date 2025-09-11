import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
    constructor(
        private readonly libaryService : LibraryService
    ){}

    @Post()
    createLibrary(){
        return this.libaryService.createLibrary();
    }

    @Get()
    getLibaries(){
        return this.libaryService.getLibraries();
    }
}
