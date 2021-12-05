import { Request, Response } from "express";
import { AuthUserUseCase } from "./AuthUserUseCase";

// Controller receive the request and return the response
export class AuthUserController {
    // Use the auth use case
    constructor(
        private authUserUseCase: AuthUserUseCase    
    ) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body;

        try {
            // call auth use case
            const response = await this.authUserUseCase.execute({
                username,
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