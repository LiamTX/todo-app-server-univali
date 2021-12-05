import { Request, Response } from "express";
import { ListTodoUseCase } from "./ListTodoUseCase";

// Controller receive the request and return the response
export class ListTodoController {
    // use the list todo use case
    constructor(
        private listTodoUseCase: ListTodoUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {

        const { user } = req.body;

        try {
            // call use case
            const response = await this.listTodoUseCase.execute(user);

            // return use case returns
            return res.json(response);
        } catch (error) {
            console.log(error)
            const { status, message } = error;

            return res.status(status ? status : 500).json({
                statusCode: status,
                message: message
            });
        }
    }
}