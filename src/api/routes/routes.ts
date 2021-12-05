import express from 'express';
import Auth from '../middlewares/Auth';

import {
    healthCheckController,
    createUserController,
    authUserController,
    createTodoController,
    listTodoController,
    updateTodoController,
    deleteTodoController
} from '../../useCases';

// Api routes class
class Routes {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.setApiRoutes();
    }

    // Create api routes
    setApiRoutes(): void {
        this.router.get('/healthcheck', async (req, res) => healthCheckController.handle(req, res));

        this.router.post('/user', async (req, res) => await createUserController.handle(req, res));
        this.router.post('/user/auth', async (req, res) => await authUserController.handle(req, res));

        this.router.use(Auth);
        this.router.get('/user/auth/verify', (req, res) => res.json('work'));
        this.router.post('/todo', async (req, res) => await createTodoController.handle(req, res));
        this.router.get('/todo', async (req, res) => await listTodoController.handle(req, res));
        this.router.put('/todo/:id', async (req, res) => await updateTodoController.handle(req, res));
        this.router.delete('/todo/:id', async (req, res) => await deleteTodoController.handle(req, res));
    }
}

export default new Routes().router;