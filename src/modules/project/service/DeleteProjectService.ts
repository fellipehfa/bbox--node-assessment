import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IProjectRepository from '../repositories/IProjectRepository';

@injectable()
export default class DeleteProjectService {
    constructor(
        @inject('ProjectRepository')
        private projectRepository: IProjectRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        const project = await this.projectRepository.findById(id);

        if (!project) {
            throw new AppError('Project not found', 404);
        }

        await this.projectRepository.delete(id);
    }
}
