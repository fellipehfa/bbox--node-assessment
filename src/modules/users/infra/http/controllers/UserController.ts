import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../service/CreateUserService';
import DeleteUserService from '../../../service/DeleteUserService';
import FindAllUserService from '../../../service/FindAllUserService';
import FindByIdUserService from '../../../service/FindByIdUserService';

export default class UserController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { firstName, lastName, email, phoneNumber, password } =
            request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        });

        return response.status(201).json(user);
    }

    public async findById(
        resquest: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = resquest.params;

        const findById = container.resolve(FindByIdUserService);

        const user = await findById.execute(id);

        return response.status(200).json(user);
    }

    public async findAll(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const findAll = container.resolve(FindAllUserService);

        const user = await findAll.execute();

        return response.status(200).json(user);
    }

    public async delete(
        resquest: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = resquest.params;

        const deleteProject = container.resolve(DeleteUserService);

        await deleteProject.execute(id);

        return response.sendStatus(204);
    }
}
