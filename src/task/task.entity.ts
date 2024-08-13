import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task.model';
import { UsersEntity } from '../auth/user.entity';
import { Exclude } from 'class-transformer';

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

  @ManyToOne(() => UsersEntity, (user) => user.tasks, { eager: false })
  @Exclude({ toPlainOnly: true })
  //whenever i print that objet into plain text i want to exclude that property i.e json response
  user: UsersEntity;
}
