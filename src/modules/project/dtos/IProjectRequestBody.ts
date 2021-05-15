import User from '../../users/infra/typeorm/entity/User';

export default interface IProjectRequestBody {
    user: User;
    description: string;
}
