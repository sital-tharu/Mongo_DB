import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { libary, libarySchema } from './schemas/libary.schema';
import { Book, schemaFactory } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
     { name: libary.name, schema: libarySchema},
      {name: Book.name, schema: schemaFactory},
    ])
  ],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
