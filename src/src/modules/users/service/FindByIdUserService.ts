import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import User from '../infra/typeorm/entity/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class FindByIdUserService {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
    ) {}

    public async execute(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        return user;
    }
}
