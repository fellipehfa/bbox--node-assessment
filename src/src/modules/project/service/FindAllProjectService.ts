import { inject, injectable } from 'tsyringe';
import Project from '../infra/typeorm/entity/Project';
import IProjectRepository from '../repositories/IProjectRepository';

@injectable()
export default class FindAllProjectService {
    constructor(
        @inject('ProjectRepository')
        private projectRepository: IProjectRepository,
    ) {}

    public async execute(userId: string): Promise<Project[]> {
        const project = await this.projectRepository.findAll(userId);

        return project;
    }
}
