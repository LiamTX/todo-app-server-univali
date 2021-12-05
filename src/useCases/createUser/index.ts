import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

// Instantiate the create user use case
const createUserUseCase = new CreateUserUseCase();
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };