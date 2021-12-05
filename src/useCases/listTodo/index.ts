import { ListTodoController } from "./ListTodoController";
import { ListTodoUseCase } from "./ListTodoUseCase";

// Instantiate the find all todos use case
const listTodoUseCase = new ListTodoUseCase();
const listTodoController = new ListTodoController(listTodoUseCase);

export { listTodoController };