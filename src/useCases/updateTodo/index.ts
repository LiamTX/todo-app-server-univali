import { UpdateTodoController } from "./UpdateTodoController";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase";

// Instantiate the update todo use case
const updateTodoUseCase = new UpdateTodoUseCase();
const updateTodoController = new UpdateTodoController(updateTodoUseCase);

export { updateTodoController };