import { getRepository, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import IProjectRequestBody from '../../../dtos/IProjectRequestBody';
import IProjectRepository from '../../../repositories/IProjectRepository';
import Project from '../entity/Project';

export default class ProjectRepository implements IProjectRepository {
    private _ormRepository: Repository<Project>;

    constructor() {
        this._ormRepository = getRepository(Project);
    }

    async create({ user, description }: IProjectRequestBody): Promise<Project> {
        const project = await this._ormRepository.create({
            uuid: uuidv4(),
            description,
            owner: user,
            creationDate: new Date(),
        });

        await this._ormRepository.save(project);

        return project;
    }

    async findById(uuid: string): Promise<Project> {
        const project = this._ormRepository.findOne(uuid);

        return project;
    }

    async findAll(userId: string): Promise<Project[]> {
        const projects = await this._ormRepository.find({
            where: {
                owner: userId,
            },
        });

        return projects;
    }

    async delete(id: string): Promise<void> {
        await this._ormRepository.delete(id);
    }
}
