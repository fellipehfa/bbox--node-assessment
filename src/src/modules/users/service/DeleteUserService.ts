import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class DeleteUserService {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new AppError('User not found', 404);
        }

        await this.userRepository.delete(id);
    }
}
