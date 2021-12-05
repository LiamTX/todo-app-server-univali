import { Request, Response } from "express";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

// Controller receive the request and return the response
export class CreateTodoController {
    // use the create use case
    constructor(
        private createTodoUseCase: CreateTodoUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { description, user } = req.body;

        try {
            // call auth use case
            const response = await this.createTodoUseCase.execute({
                description,
                user
            });

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