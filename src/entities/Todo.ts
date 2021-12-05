import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from ".";

// Todo entity class
export class Todo {
    _id?: string;

    @prop()
    description: string;

    @prop({ ref: () => User })
    user?: Ref<User>;

    @prop()
    done: boolean;
}

const TodoModel = getModelForClass(Todo);

export { TodoModel };