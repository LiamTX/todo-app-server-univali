import errors from "http-errors";
import { UserModel } from "../../entities";
import { ICreateUserDto } from "./ICreateUser.dto";

// Use case handle business rule
export class CreateUserUseCase {
    constructor() { }

    async execute(data: ICreateUserDto) {
        const { username, email } = data;

        // verify if user already exists
        const userAlreadyExists = await UserModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });
        if (userAlreadyExists) {
            throw new errors.BadRequest('Email or username already exists');
        }

        // return user created
        return await UserModel.create(data);
    }
}