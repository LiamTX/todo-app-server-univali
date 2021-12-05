import { Request, Response } from "express";
import createHttpError from "http-errors";
import { HealthCheckUseCase } from "./HealthCheckUseCase";

// Controller receive the request and return the response
export class HealthCheckController {
    constructor(
        private healthCheckUseCase: HealthCheckUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            return res.json(this.healthCheckUseCase.execute());
        } catch (error) {
            const { status, message } = error;

            createHttpError(
                status ? status : 500,
                message ? message : 'Internal server error'
            );
        }
    }
}