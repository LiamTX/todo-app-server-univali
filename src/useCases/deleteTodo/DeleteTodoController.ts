import { Request, Response } from "express";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

// Controller receive the request and return the response
export class DeleteTodoController {
    // use delete use case
    constructor(
        private deleteTodoUseCase: DeleteTodoUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { user } = req.body;

        try {
            // call the use case
            const response = await this.deleteTodoUseCase.execute({ id }, user);

            // return use case returns
            return res.json(response);
        } catch (error) {
            const { status, message } = error;

            return res.status(status ? status : 500).json({
                statusCode: status,
                message: message
            });
        }
    }
}