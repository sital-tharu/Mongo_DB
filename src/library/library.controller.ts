import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
    constructor(
        private readonly libraryService : LibraryService
    ){}

    @Post()
    createLibrary(){
        return this.libraryService.createLibrary();
    }

    @Get()
    getLibaries(){
        return this.libraryService.getLibraries();
    }
}
