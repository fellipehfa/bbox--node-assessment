import IUserRequestBody from '../dtos/IProjectRequestBody';
import Project from '../infra/typeorm/entity/Project';

export default interface IProjectRepository {
    create(data: IUserRequestBody): Promise<Project>;
    findById(id: string): Promise<Project | undefined>;
    findAll(userId: string): Promise<Project[] | undefined>;
    delete(id: string): Promise<void>;
}
