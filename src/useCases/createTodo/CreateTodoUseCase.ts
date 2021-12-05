import createHttpError from "http-errors";
import { TodoModel, UserModel } from "../../entities";
import { ICreateTodoDto } from "./ICreateTodo.dto";

// Use case handle business rule
export class CreateTodoUseCase {
    constructor() { }

    async execute(data: ICreateTodoDto) {
        const { title, description, user } = data;

        // verify if user exists
        const userExists = await UserModel.findById(user._id);
        if (!user) {
            throw createHttpError(404, 'User not found');
        }

        // create todo
        const todo = await TodoModel.create({
            title,
            description,
            user: user._id,
            done: false
        });

        // create the relationship between todo and user
        userExists.todos.push(todo);
        await UserModel.findByIdAndUpdate(userExists._id, userExists);

        // return created todo
        return todo;
    }
}