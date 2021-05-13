import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import Project from '../infra/typeorm/entity/Project';
import IProjectRepository from '../repositories/IProjectRepository';

@injectable()
export default class FindByIdProjectService {
    constructor(
        @inject('ProjectRepository')
        private projectRepository: IProjectRepository,
    ) {}

    public async execute(id: string): Promise<Project> {
        const project = await this.projectRepository.findById(id);

        if (!project) {
            throw new AppError('Project not found', 404);
        }

        return project;
    }
}
