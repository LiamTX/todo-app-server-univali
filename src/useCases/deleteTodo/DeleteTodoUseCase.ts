import { Request } from "express";
import createHttpError from "http-errors";
import { TodoModel, UserModel } from "../../entities";
import { IDeleteTodoDto } from "./IDeleteTodo.dto";

// Use case handle business rule
export class DeleteTodoUseCase {
    constructor() { }

    async execute(data: IDeleteTodoDto, reqUser: { username: string, _id: string }) {
        // verify if user exists
        const user = await UserModel.findById(reqUser._id);
        if (!user) {
            throw createHttpError(404, 'User not found');
        }

        // verify if todo exists
        const todo = await TodoModel.findById(data.id);
        if (!todo) {
            throw createHttpError(404, 'Todo not found');
        }

        // verify if the todo is from user
        if (user._id.toString() !== todo.user.toString()) {
            throw createHttpError(401, 'Unauthorized');
        }

        // return todo deleted
        return await TodoModel.findByIdAndDelete(data.id);
    }
}