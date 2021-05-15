import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserTable1619188550346
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'uuid', type: 'varchar', isPrimary: true },
                    { name: 'first_name', type: 'varchar' },
                    { name: 'last_name', type: 'varchar' },
                    { name: 'email', type: 'varchar' },
                    { name: 'phone_number', type: 'varchar' },
                    { name: 'password', type: 'varchar' },
                    { name: 'role', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp' },
                    { name: 'current_event', type: 'varchar' },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
