import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phoneNumber: Joi.string().min(11).max(12).required(),
            password: Joi.string().min(6).required(),
        },
    }),
    userController.create,
);

userRouter.get('/', userController.findAll);

userRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    userController.findById,
);

userRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    userController.delete,
);

export default userRouter;
