import { Router } from 'express';
import projectRouter from '../../../../modules/project/infra/http/routes/project.routes';
import userRouter from '../../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/projects', projectRouter);

export default routes;
