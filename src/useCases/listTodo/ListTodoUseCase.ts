import { TodoModel, User } from "../../entities";

// Use case handle business rule
export class ListTodoUseCase {
    constructor() { }

    async execute(user: any) {
        // return all todos
        return await TodoModel.find({ user: user._id }).populate({ model: User, path: 'user', select: '_id username email' });
    }
}