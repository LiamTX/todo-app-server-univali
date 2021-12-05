import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

// Controller receive the request and return the response
export class CreateUserController {
    // use create use case class
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { username, email, password } = req.body;

        try {
            // call the create user use case
            const response = await this.createUserUseCase.execute({
                username,
                email,
                password
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