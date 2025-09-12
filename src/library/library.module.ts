import { Module } from '@nestjs/common';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schemas/library.schema';
import { Book, schemaFactory } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Library.name, schema: LibrarySchema },
      {name: Book.name, schema: schemaFactory},
    ])
  ],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
