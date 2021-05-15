import IUserRequestBody from '../dtos/IUserRequestBody';
import User from '../infra/typeorm/entity/User';

export default interface IUserRepository {
    create(data: IUserRequestBody): Promise<User>;
    findById(id: string): Promise<User | undefined>;
    findAll(): Promise<User[] | undefined>;
    delete(id: string): Promise<void>;
    save(user: User): Promise<User>;
}
