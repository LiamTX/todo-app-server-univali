import { DeleteTodoController } from "./DeleteTodoController";
import { DeleteTodoUseCase } from "./DeleteTodoUseCase";

// Instantiate the delete todo use case
const deleteTodoUseCase = new DeleteTodoUseCase();
const deleteTodoController = new DeleteTodoController(deleteTodoUseCase);

export { deleteTodoController };