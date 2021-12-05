import { Request } from "express";
import createHttpError from "http-errors";
import { TodoModel, UserModel } from "../../entities";
import { IUpdateTodoDto } from "./IUpdateTodo.dto";

// Use case handle business rule
export class UpdateTodoUseCase {
    constructor() { }

    async execute(id: string, data: IUpdateTodoDto, reqUser: { username: string, _id: string }) {
        // verify if user exists
        const user = await UserModel.findById(reqUser._id);
        if (!user) {
            throw createHttpError(404, 'User not found');
        }

        // verify if todo existis
        const todo = await TodoModel.findById(id);
        if (!todo) {
            throw createHttpError(404, 'Todo not found');
        }

        // verify if the todo is from user
        if (user._id.toString() !== todo.user.toString()) {
            throw createHttpError(401, 'Unauthorized');
        }

        // return the updated todo
        return await TodoModel.findByIdAndUpdate(id, data, { new: true });
    }
}