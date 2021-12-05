import { HealthCheckController } from "./HealthCheckController";
import { HealthCheckUseCase } from "./HealthCheckUseCase";

const healthCheckUseCase = new HealthCheckUseCase();
const healthCheckController = new HealthCheckController(healthCheckUseCase);

export { healthCheckController };