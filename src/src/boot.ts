import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import './shared/infra/typeorm';
import './shared/container';
import routes from './shared/infra/http/routes';

import AppError from './shared/errors/AppError';

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (error: Error, request: Request, response: Response, _: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: error.statusCode,
                message: error.message,
            });
        }

        return response.status(500).json({
            message: error.message,
            stack: error.stack,
        });
    },
);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
});
