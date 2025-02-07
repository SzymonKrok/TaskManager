import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Relation,
} from 'typeorm';

export enum Status {
  TO_DO = 'TO_DO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  tags: string;

  @Column()
  priority: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TO_DO,
  })
  status: Status;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.tasks, {
    // lazy: false,
    nullable: true,
    // eager: false,
    // cascade: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;
}
