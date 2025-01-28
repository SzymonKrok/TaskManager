import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStatusInTasks1738094578024 implements MigrationInterface {
    name = 'AddStatusInTasks1738094578024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE "public"."task_status_enum" AS ENUM('TO_DO', 'IN_PROGRESS', 'REVIEW', 'DONE')
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD "status" "public"."task_status_enum" NOT NULL DEFAULT 'TO_DO'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "task" DROP COLUMN "status"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."task_status_enum"
        `);
    }

}
