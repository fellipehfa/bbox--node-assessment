import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entity/User';
import IUserRepository from '../repositories/IUserRepository';

interface IUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

@injectable()
export default class CreateUserService {
    constructor(
        @inject('UserRepository') private userRepository: IUserRepository,
    ) {}

    public async execute({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
    }: IUserRequest): Promise<User> {
        const user = await this.userRepository.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        });

        return user;
    }
}
