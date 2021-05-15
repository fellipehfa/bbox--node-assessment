import { container } from 'tsyringe';
import ProjectRepository from '../../modules/project/infra/typeorm/repositories/ProjectRepository';
import IProjectRepository from '../../modules/project/repositories/IProjectRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import IUserRepository from '../../modules/users/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IProjectRepository>(
    'ProjectRepository',
    ProjectRepository,
);
