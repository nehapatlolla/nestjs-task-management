import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task.model';
import { UsersEntity } from 'src/auth/user.entity';

@Entity()
export class HeyTask {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TaskStatus;

  @ManyToOne(() => UsersEntity, (user) => user.tasks, { eager: true })
  user: UsersEntity;
}
