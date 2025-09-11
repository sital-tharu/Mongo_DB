import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

@Schema()
export class PropSchema extends Document{
    @Prop()
    title: string;

    @Prop()
    author : string;
}

