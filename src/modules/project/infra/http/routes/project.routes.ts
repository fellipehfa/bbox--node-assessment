import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ProjectController from '../controllers/ProjectController';

const projectRouter = Router();

const projectController = new ProjectController();

projectRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            userId: Joi.string().uuid().required(),
            description: Joi.string().required(),
        },
    }),
    projectController.create,
);

projectRouter.get(
    '/',
    celebrate({
        [Segments.QUERY]: {
            userId: Joi.string().uuid().required(),
        },
    }),
    projectController.findAll,
);

projectRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    projectController.findById,
);

projectRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    projectController.delete,
);

export default projectRouter;
