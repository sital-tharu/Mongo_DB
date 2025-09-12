import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({timestamps: true})
export class Project extends Document{
    @Prop({required: true})
    title: string;

    @Prop({type: [Types.ObjectId], ref: 'Developer'})
    developers : Types.ObjectId

}
export const DeveloperSchema = SchemaFactory.createForClass(Project);