import { CreateTodoController } from "./CreateTodoController";
import { CreateTodoUseCase } from "./CreateTodoUseCase";

// Instantiate the crete todo use case
const createTodoUseCase = new CreateTodoUseCase();
const createTodoController = new CreateTodoController(createTodoUseCase);

export { createTodoController };