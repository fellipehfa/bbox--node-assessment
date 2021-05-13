import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entity/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class FindAllUserService {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
    ) {}

    public async execute(): Promise<User[]> {
        const user = await this.userRepository.findAll();

        return user;
    }
}
