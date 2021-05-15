import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateProjectTable1619453804962
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'projects',
                columns: [
                    { name: 'uuid', type: 'varchar', isPrimary: true },
                    { name: 'description', type: 'varchar' },
                    { name: 'owner', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp' },
                ],
            }),
            true,
        );
        await queryRunner.createForeignKey(
            'projects',
            new TableForeignKey({
                columnNames: ['owner'],
                referencedColumnNames: ['uuid'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
    }
}
