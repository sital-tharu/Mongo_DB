import { Schema, SchemaFactory , Prop } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class libary extends Document{
    @Prop()
    name : string;


    @Prop({type:[{type: Types.ObjectId, ref:'Book'}]})
    books : Types.ObjectId[];
}
export const libarySchema = SchemaFactory.createForClass(libary);
