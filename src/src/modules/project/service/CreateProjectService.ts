import { inject, injectable } from 'tsyringe';
import Project from '../infra/typeorm/entity/Project';
import IUserRepository from '../../users/repositories/IUserRepository';
import IProjectRepository from '../repositories/IProjectRepository';

interface IProjectRequest {
    userId: string;
    description: string;
}

@injectable()
export default class CreateProjectService {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
        @inject('ProjectRepository')
        private projectRepository: IProjectRepository,
    ) {}

    public async execute({
        userId,
        description,
    }: IProjectRequest): Promise<Project> {
        const user = await this.userRepository.findById(userId);
        const project = await this.projectRepository.create({
            user,
            description,
        });

        return project;
    }
}
