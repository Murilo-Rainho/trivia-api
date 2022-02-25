import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('BooleanQuestions')
class BooleanQuestion {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  question: string;

  @Column()
  rightAnswer: boolean;

  @Column()
  wrongAnswer: boolean;
}

export { BooleanQuestion };
