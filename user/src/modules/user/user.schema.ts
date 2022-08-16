import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps: true,
})

export class User {

    @Prop({
        unique: true,
    })
    username: string
    @Prop()
    password: string;
    @Prop()
    age: number;


}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema }