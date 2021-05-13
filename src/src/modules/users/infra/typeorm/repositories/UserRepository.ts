import { getRepository, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import IUserRequestBody from '../../../dtos/IUserRequestBody';
import IUserRepository from '../../../repositories/IUserRepository';
import User, { UserEvent, UserRole } from '../entity/User';

export default class UserRepository implements IUserRepository {
    private _ormRepository: Repository<User>;

    constructor() {
        this._ormRepository = getRepository(User);
    }

    async save(user: User): Promise<User> {
        return this._ormRepository.save(user);
    }

    async create({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
    }: IUserRequestBody): Promise<User> {
        const user = await this._ormRepository.create({
            uuid: uuidv4(),
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            role: UserRole.CLIENT,
            currentEvent: UserEvent.CREATION,
            creationDate: new Date(),
        });

        await this._ormRepository.save(user);

        return user;
    }

    async findById(uuid: string): Promise<User> {
        const user = this._ormRepository.findOne(uuid);

        return user;
    }

    async findAll(): Promise<User[]> {
        const users = await this._ormRepository.find();

        return users;
    }

    async delete(id: string): Promise<void> {
        await this._ormRepository.delete(id);
    }
}
