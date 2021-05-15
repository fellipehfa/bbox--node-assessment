import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entity/User';

@Entity('projects')
export default class Project extends BaseEntity {
    @PrimaryColumn()
    uuid: string;

    @Column({ name: 'description' })
    description: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'owner' })
    owner: User;

    @Column({ name: 'created_at' })
    creationDate: Date;
}
