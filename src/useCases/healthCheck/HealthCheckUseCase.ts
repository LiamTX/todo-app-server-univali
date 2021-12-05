export class HealthCheckUseCase {
    constructor() { }

    execute() {
        return { isWorking: 'WORKING' };
    }
}