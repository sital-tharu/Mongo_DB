import { Schema, SchemaFactory , Prop } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Library extends Document {
    @Prop()
    name: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Book' }] })
    books: Types.ObjectId[];
}
export const LibrarySchema = SchemaFactory.createForClass(Library);
