import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProjectService from '../../../service/CreateProjectService';
import DeleteProjectService from '../../../service/DeleteProjectService';
import FindAllProjectService from '../../../service/FindAllProjectService';
import FindByIdProjectService from '../../../service/FindByIdProjectService';

export default class ProjectController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { userId, description } = request.body;

        const createProject = container.resolve(CreateProjectService);

        const project = await createProject.execute({
            userId,
            description,
        });
        console.log(project);

        return response.status(201).json(project);
    }

    public async findById(
        resquest: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = resquest.params;

        const findById = container.resolve(FindByIdProjectService);

        const project = await findById.execute(id);

        return response.status(200).json(project);
    }

    public async findAll(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { userId } = request.query;
        const findAll = container.resolve(FindAllProjectService);

        const project = await findAll.execute(userId.toString());

        return response.status(200).json(project);
    }

    public async delete(
        resquest: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = resquest.params;

        const deleteProject = container.resolve(DeleteProjectService);

        await deleteProject.execute(id);

        return response.sendStatus(204);
    }
}
