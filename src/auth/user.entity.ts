import { HeyTask } from '../task/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;

  @OneToMany(() => HeyTask, (task) => task.user, { eager: true })
  tasks: HeyTask[];
  // This will hold all tasks associated with this user
}
