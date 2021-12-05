import { Request, Response } from "express";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

// Controller receive the request and return the response
export class UpdateTodoController {
    // use the update todo use case
    constructor(
        private updateTodoUseCase: UpdateTodoUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            // call the use case
            const response = await this.updateTodoUseCase.execute(id, req.body, req.body.user);

            // return the use case returns
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