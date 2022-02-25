import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooleanQuestions1643031933481 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'boolean_questions',
        columns: [
          {
            type: 'int',
            name: 'id',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            type: 'varchar(300)',
            name: 'question',
            isNullable: false,
            isUnique: true,
          },
          {
            type: 'bit',
            name: 'rightAnswer',
            isNullable: false,
          },
          {
            type: 'bit',
            name: 'wrongAnswer',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('boolean_questions');
  }

}
