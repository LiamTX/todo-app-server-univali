import { getModelForClass, pre, prop, Ref } from "@typegoose/typegoose";
import { hashSync, genSaltSync } from "bcrypt";
import { Todo } from ".";

// Befor save user encrypt the password
@pre<User>('save', function () {
    this.password = hashSync(this.password, genSaltSync());
})

// User entity class
export class User {
    _id?: string;

    @prop({ unique: true })
    username: string;

    @prop({ unique: true })
    email: string;

    @prop()
    password: string;

    @prop({ ref: () => Todo })
    todos?: Ref<Todo>[]
}

const UserModel = getModelForClass(User);

export { UserModel };