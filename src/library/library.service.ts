import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { Library } from './schemas/libary.schema';

@Injectable()
export class LibraryService {
    constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @InjectModel(Library.name) private libraryModel : Model<Library>
    ){}

    async createLibrary(): Promise<Library> {
        // Create a book with required fields (adjust as needed)
        const book1 = await this.bookModel.create({
            title: 'Js Boss',
            author: 'LATIS',
        });
        // Create a library with the new book
        const library = new this.libraryModel({
            name: 'central',
            books: [book1._id],
        });
        return library.save();
    }

    async getLibraries(): Promise<Library[]> {
        return this.libraryModel.find().populate('books');
    }
}