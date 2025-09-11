import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { libary } from './schemas/libary.schema';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(libary.name) private libaryModel : Model<libary>
    ){}
}
