import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/routes';

// Api class
class Api {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
    }

    // Set middlewares api (cors, json, routes)
    middlewares(): void {
        this.express.use(cors());
        this.express.use(express.json());
        dotenv.config();
        this.express.use('/api', router);

        console.log(process.env.JWT_SECRET)
    }
}

export default new Api().express;
